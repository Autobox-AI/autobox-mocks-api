import { randomUUID as uuidv4 } from 'crypto'
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions'
import { createChatCompletion, createParsedChatCompletion } from '../openai'
import { createPrompt as createSummaryPrompt } from '../prompts/summary'
import { createPrompt as createTracesPrompt } from '../prompts/traces'
import { Run } from '../schemas/run'
import { Trace, TracesSchema } from '../schemas/traces'
import { getTimestamps } from '../utils'

const statuses = ['in progress', 'completed', 'failed', 'aborted', 'timeout', 'created']

export async function generateRuns(
  simulations: any[]
): Promise<Array<{ run: Run; traces: Trace[] }>> {
  const generateSimulationRuns = async (
    simulation: any
  ): Promise<Array<{ run: any; traces: any[] }>> => {
    const randomNumberOfRuns = Math.floor(Math.random() * 5) + 1
    console.log(`Generating ${randomNumberOfRuns} runs for simulation ${simulation.id}`)

    const runPromises = Array.from({ length: randomNumberOfRuns }, () =>
      generateSingleRun(simulation).catch(error => {
        console.error(`Error generating run for simulation ${simulation.id}:`, error)
        return null
      })
    )

    const results = await Promise.all(runPromises)
    return results.filter(r => r !== null) as Array<{ run: any; traces: any[] }>
  }

  const allSimulationRuns = await Promise.all(
    simulations.map((simulation) => generateSimulationRuns(simulation))
  )

  const runs: Array<{ run: any; traces: any[] }> = allSimulationRuns.flat()

  return runs
}

const generateSingleRun = async (simulation: any): Promise<{ run: Run; traces: Trace[] }> => {
  console.log('Generating single run for simulation', simulation.id)

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
    summary: randomStatus === 'completed' ? 'Summary of the run' : null,
    orchestrator: simulation['orchestrator'],
    evaluator: simulation['evaluator'],
    planner: simulation['planner'],
    reporter: simulation['reporter'],
    workers: workers,
    finished_at: timestamps['finished_at'],
    aborted_at: timestamps['aborted_at'],
    updated_at: timestamps['updated_at'],
  }

  if (run.finished_at) {
    run.finished_at = ensureMillisecondsInDate(run.finished_at)
  }
  if (run.aborted_at) {
    run.aborted_at = ensureMillisecondsInDate(run.aborted_at)
  }
  if (run.updated_at) {
    run.updated_at = ensureMillisecondsInDate(run.updated_at)
  }

  let generatedTraces: any[]
  if (randomStatus != 'created') {
    generatedTraces = await generateTraces(simulation, run)
  } else {
    generatedTraces = []
  }

  const traces = generatedTraces.map((trace: any) => ({
    from: trace.from_agent || trace.from,
    to: trace.to_agent || trace.to,
    content: trace.content,
    is_system_trace: trace.is_system_trace,
    created_at: trace.created_at,
  }))

  run['summary'] = randomStatus === 'completed' ? await generateSummary(simulation, traces) : null

  return { run, traces }
}

export const generateTraces = async (simulation: any, run: any): Promise<any[]> => {
  console.log(`Generating traces for run ${run.id} of simulation ${simulation.id}`)

  const agents = simulation.agents.map((worker: any) => ({
    name: worker.name,
    role: worker.role,
    description: worker.description,
    backstory: worker.backstory,
  }))

  const params: {
    simulation_name: string
    simulation_description: string
    simulation_task: string
    agents: string
    orchestrator_name: string
    evaluator_name: string
    reporter_name: string
    planner_name: string
    run_status: string
    run_started_at: string
  } = {
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
    const parsedCompletion = await createParsedChatCompletion(messages, TracesSchema)
    const traces = parsedCompletion.traces || []

    const processedTraces = traces.map((trace: any) => ({
      ...trace,
      created_at: ensureMillisecondsInDate(trace.created_at),
    }))

    return processedTraces
  } catch (error) {
    console.error('Error generating traces:', error)
    return []
  }
}

const ensureMillisecondsInDate = (dateString: string): string => {
  try {
    let cleanDateString = dateString
    
    if (dateString.includes('Z')) {
      cleanDateString = dateString.substring(0, dateString.indexOf('Z') + 1)
    }
    
    if (cleanDateString.includes('.') && cleanDateString.endsWith('Z')) {
      const testDate = new Date(cleanDateString)
      if (!isNaN(testDate.getTime())) {
        return cleanDateString
      }
    }
    
    const date = new Date(cleanDateString)
    if (isNaN(date.getTime())) {
      console.error('Invalid date, using current time:', dateString)
      return new Date().toISOString()
    }
    
    return date.toISOString()
  } catch (error) {
    console.error('Error processing date:', dateString, error)
    return new Date().toISOString()
  }
}

export const generateSummary = async (simulation: any, traces: any[]) => {
  console.log('Generating summary for run', simulation.id)

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

  return await createChatCompletion(messages)
}
