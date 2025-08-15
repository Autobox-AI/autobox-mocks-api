import { randomUUID as uuidv4 } from 'crypto'
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions'
import { batchCreateChatCompletion, batchCreateParsedChatCompletion } from '../openai/batchProcessor'
import { createPrompt as createSummaryPrompt } from '../prompts/summary'
import { createPrompt as createTracesPrompt } from '../prompts/traces'
import { Run } from '../schemas/run'
import { Trace, TracesSchema } from '../schemas/traces'
import { getTimestamps } from '../utils'

const statuses = ['in progress', 'completed', 'failed', 'aborted', 'timeout', 'created']

export async function generateRunsOptimized(
  simulations: any[]
): Promise<Array<{ run: Run; traces: Trace[] }>> {
  // Flatten all runs generation into a single array for better parallelization
  const allRunPromises: Promise<{ run: Run; traces: Trace[] }>[] = []
  
  for (const simulation of simulations) {
    const randomNumberOfRuns = Math.floor(Math.random() * 5) + 1
    console.log(`Queuing ${randomNumberOfRuns} runs for simulation ${simulation.id}`)
    
    for (let i = 0; i < randomNumberOfRuns; i++) {
      allRunPromises.push(generateSingleRunOptimized(simulation))
    }
  }
  
  // Process all runs with controlled concurrency
  const batchSize = 20 // Process 20 runs at a time
  const results: Array<{ run: Run; traces: Trace[] }> = []
  
  for (let i = 0; i < allRunPromises.length; i += batchSize) {
    const batch = allRunPromises.slice(i, i + batchSize)
    const batchResults = await Promise.all(batch)
    results.push(...batchResults)
    console.log(`Processed ${Math.min(i + batchSize, allRunPromises.length)}/${allRunPromises.length} runs`)
  }
  
  return results
}

const generateSingleRunOptimized = async (simulation: any): Promise<{ run: Run; traces: Trace[] }> => {
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]
  
  let progress
  if (randomStatus === 'created') {
    progress = 0
  } else if (randomStatus === 'completed') {
    progress = 100
  } else {
    progress = Math.floor(Math.random() * 100)
  }
  
  const timestamps = getTimestamps(randomStatus, simulation['created_at'])
  const agents = simulation['agents']
  
  const workers = agents.map((agent: any) => ({
    id: agent.id,
    name: agent.name,
    role: agent.role,
    description: agent.description,
    backstory: agent.backstory,
    llm: agent.llm,
  }))
  
  const run = {
    id: uuidv4(),
    simulation_id: simulation['id'],
    status: randomStatus,
    progress: progress,
    started_at: timestamps['started_at'],
    summary: null,
    orchestrator: simulation['orchestrator'],
    evaluator: simulation['evaluator'],
    planner: simulation['planner'],
    reporter: simulation['reporter'],
    workers: workers,
    finished_at: timestamps['finished_at'] ? ensureMillisecondsInDate(timestamps['finished_at']) : null,
    aborted_at: timestamps['aborted_at'] ? ensureMillisecondsInDate(timestamps['aborted_at']) : null,
    updated_at: timestamps['updated_at'] ? ensureMillisecondsInDate(timestamps['updated_at']) : null,
  }
  
  // Parallel generation of traces and summary preparation
  if (randomStatus !== 'created') {
    const [generatedTraces] = await Promise.all([
      generateTracesOptimized(simulation, run),
      // Pre-warm the summary generation if status is completed
      randomStatus === 'completed' ? prepareSummaryContext(simulation) : Promise.resolve(null)
    ])
    
    const traces = generatedTraces.map((trace: any) => ({
      from: trace.from_agent || trace.from,
      to: trace.to_agent || trace.to,
      content: trace.content,
      is_system_trace: trace.is_system_trace,
      created_at: trace.created_at,
    }))
    
    // Generate summary only if completed
    if (randomStatus === 'completed') {
      run.summary = await generateSummaryOptimized(simulation, traces)
    }
    
    return { run, traces }
  }
  
  return { run, traces: [] }
}

const generateTracesOptimized = async (simulation: any, run: any): Promise<any[]> => {
  const agents = simulation.agents.map((worker: any) => ({
    name: worker.name,
    role: worker.role,
    description: worker.description,
    backstory: worker.backstory,
  }))
  
  const params = {
    simulation_name: simulation.name,
    simulation_description: simulation.description,
    simulation_task: simulation.task,
    agents: JSON.stringify(agents),
    orchestrator_name: simulation.orchestrator.name,
    evaluator_name: simulation.evaluator.name,
    reporter_name: simulation.reporter.name,
    planner_name: simulation.planner.name,
    run_status: run.status,
    run_started_at: run.started_at,
  }
  
  const messages: ChatCompletionMessageParam[] = [
    {
      role: 'system',
      content: createTracesPrompt(params),
    },
  ]
  
  try {
    const parsedCompletion = await batchCreateParsedChatCompletion(messages, TracesSchema)
    const traces = parsedCompletion.traces || []
    
    return traces.map((trace: any) => ({
      ...trace,
      created_at: ensureMillisecondsInDate(trace.created_at),
    }))
  } catch (error) {
    console.error('Error generating traces:', error)
    return []
  }
}

const prepareSummaryContext = async (simulation: any) => {
  // Pre-process any heavy computation for summary generation
  return {
    agents: simulation.agents.map((worker: any) => ({
      id: worker.id,
      name: worker.name,
    })),
    simulationContext: {
      name: simulation.name,
      description: simulation.description,
      task: simulation.task,
    }
  }
}

const generateSummaryOptimized = async (simulation: any, traces: any[]) => {
  const agents = simulation.agents.map((worker: any) => ({
    id: worker.id,
    name: worker.name,
  }))
  
  const params = {
    simulation_name: simulation.name,
    simulation_description: simulation.description,
    simulation_task: simulation.task,
    agents: JSON.stringify(agents),
    traces: JSON.stringify(traces),
  }
  
  const messages: ChatCompletionMessageParam[] = [
    {
      role: 'system',
      content: createSummaryPrompt(params),
    },
  ]
  
  return await batchCreateChatCompletion(messages)
}

const ensureMillisecondsInDate = (dateString: string): string => {
  try {
    if (dateString.includes('.') && dateString.endsWith('Z')) {
      return dateString
    }
    const date = new Date(dateString)
    return date.toISOString()
  } catch (error) {
    console.error('Error processing date:', dateString, error)
    return new Date().toISOString()
  }
}