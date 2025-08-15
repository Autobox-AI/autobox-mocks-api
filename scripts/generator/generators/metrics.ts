import { ChatCompletionMessageParam } from 'openai/resources/chat/completions'
import { createParsedChatCompletion } from '../openai'
import { createPrompt as createMetricValuesPrompt } from '../prompts/metricsCalculator'
import { createPrompt as createMetricDefinitionPrompt } from '../prompts/metricsDefinition'
import {
  MetricDefinition,
  MetricDefinitionsSchema,
  MetricValue,
  MetricValuesSchema,
} from '../schemas/metric'

export async function generateMetricDefinitions(
  simulations: any[]
): Promise<Record<string, MetricDefinition[]>> {
  const generateSimulationMetricDefinitions = async (
    simulation: any
  ): Promise<{ simulationId: string; metrics: MetricDefinition[] } | null> => {
    try {
      console.log(`Generating metric definitions for simulation ${simulation.id}`)
      return await generateMetricDefinition(simulation)
    } catch (error) {
      console.error(`Error generating metric definitions for simulation ${simulation.id}:`, error)
      return null
    }
  }

  // Process all simulations in parallel
  const allSimulationMetricDefinitions = await Promise.all(
    simulations.map((simulation) => generateSimulationMetricDefinitions(simulation))
  )

  // Flatten the results from all simulations
  return allSimulationMetricDefinitions.reduce(
    (acc, metricDefinitions) => {
      if (metricDefinitions) {
        acc[metricDefinitions.simulationId] = metricDefinitions.metrics
      }
      return acc
    },
    {} as Record<string, MetricDefinition[]>
  )
}

export async function generateMetricValues(
  run: any,
  traces: any[],
  metricDefinitions: MetricDefinition[],
  simulation: any
): Promise<{ runId: string; metrics: MetricValue[] }> {
  const agents = simulation.agents.map((agent: any) => ({
    name: agent.name,
    role: agent.role,
    backstory: agent.backstory,
  }))

  const messages: ChatCompletionMessageParam[] = [
    {
      role: 'system',
      content: createMetricValuesPrompt({
        simulationName: simulation.name,
        description: simulation.description,
        task: simulation.task,
        agents: JSON.stringify(agents),
        status: run.status,
        metricDefinitions: JSON.stringify(metricDefinitions),
        traces: JSON.stringify(traces),
      }),
    },
  ]

  const parsedCompletion = await createParsedChatCompletion(messages, MetricValuesSchema)

  return { runId: run.id, metrics: parsedCompletion.metrics }
}

// async def generate_metric_values(
//   run: Dict, traces: List[Dict], metric_definitions: Dict, simulation: Dict
// ) -> Dict:
//   agents = [
//       {
//           "name": agent["name"],
//           "role": agent["role"],
//           "backstory": agent["backstory"],
//       }
//       for agent in simulation["agents"]
//   ]
//   messages = [
//       {
//           "role": "system",
//           "content": metrics_calculator_prompt(
//               task=simulation["task"],
//               description=simulation["description"],
//               agents=json.dumps(agents),
//               status=run["status"],
//           ),
//       },
//       {
//           "role": "user",
//           "content": f"METRIC DEFINITIONS:\n {metric_definitions}",
//       },
//       # {
//       #     "role": "user",
//       #     "content": f"TRACES:\n {json.dumps([trace.model_dump() for trace in traces])}",
//       # },
//   ]
//   for i, trace in enumerate(traces):
//       messages.append(
//           {
//               "role": "user",
//               "content": f"TRACE-{i + 1}:\n {trace}",
//           }
//       )
//   parsed_completion = await create_parsed_chat_completion(
//       messages, MetricValuesSchema
//   )
//   return run["id"], parsed_completion.metrics

const generateMetricDefinition = async (
  simulation: any
): Promise<{ simulationId: string; metrics: MetricDefinition[] }> => {
  const agents = simulation.agents.map((agent: any) => ({
    name: agent.name,
    role: agent.role,
    backstory: agent.backstory,
  }))

  const messages: ChatCompletionMessageParam[] = [
    {
      role: 'system',
      content: createMetricDefinitionPrompt({
        simulationName: simulation.name,
        description: simulation.description,
        task: simulation.task,
        agents: JSON.stringify(agents),
      }),
    },
  ]

  const parsedCompletion = await createParsedChatCompletion(messages, MetricDefinitionsSchema)

  return { simulationId: simulation.id, metrics: parsedCompletion.metrics }
}

// async def generate_single_simulation_metrics(
//   simulation: Dict,
// ) -> tuple[str, list[MetricDefinitionSchema]]:
//   print(f"Generating metrics for simulation {simulation['id']}")
//   agents = [
//       {
//           "name": agent["name"],
//           "role": agent["role"],
//           "backstory": agent["backstory"],
//       }
//       for agent in simulation["agents"]
//   ]
//   messages = [
//       {
//           "role": "system",
//           "content": metrics_definition_prompt(
//               task=simulation["task"],
//               description=simulation["description"],
//               agents=json.dumps(agents),
//           ),
//       },
//   ]
//   parsed_completion = await create_parsed_chat_completion(
//       messages, MetricDefinitionsSchema
//   )
//   print(f"Generated metrics for simulation {simulation['id']}")
//   return simulation["id"], parsed_completion.metrics
