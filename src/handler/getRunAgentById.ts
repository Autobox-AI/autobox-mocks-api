import { VercelRequest, VercelResponse } from '@vercel/node'
import { logger } from '../logger'
import { runs } from '../mocks'
import { simulations } from '../mocks/simulations'

export function getRunAgentById(request: VercelRequest, response: VercelResponse) {
  try {
    const { rid, agentId } = request.query

    const runEntry = runs.find((r) => r.id === rid)

    if (!runEntry) {
      logger.warn(`Run not found: ${rid}`)
      return response.status(404).json({ error: 'Run not found' })
    }

    const simulation = simulations.find((s) => s?.id === runEntry.simulation_id)

    if (!simulation) {
      logger.warn(`Simulation not found for run: ${rid}`)
      return response.status(404).json({ error: 'Simulation not found' })
    }

    const detailedAgents = simulation.agents.map((agent) => ({
      id: agent.id,
      name: agent.name,
      description: agent.description,
      role: agent.role,
      backstory: agent.backstory,
      instructions: null,
    }))

    const systemAgents = [
      {
        id: simulation.orchestrator.id,
        name: simulation.orchestrator.name,
        description: 'Orchestrates the simulation flow and coordinates agent interactions',
        role: 'orchestrator',
        backstory: 'System agent responsible for managing simulation execution',
        instructions: null,
      },
      {
        id: simulation.evaluator.id,
        name: simulation.evaluator.name,
        description: 'Evaluates simulation outcomes and agent performance',
        role: 'evaluator',
        backstory: 'System agent responsible for assessing simulation results',
        instructions: null,
      },
      {
        id: simulation.planner.id,
        name: simulation.planner.name,
        description: 'Creates and manages execution plans for the simulation',
        role: 'planner',
        backstory: 'System agent responsible for simulation planning and strategy',
        instructions: null,
      },
      {
        id: simulation.reporter.id,
        name: simulation.reporter.name,
        description: 'Generates summaries and reports of simulation results',
        role: 'reporter',
        backstory: 'System agent responsible for documentation and reporting',
        instructions: null,
      },
    ]

    const allAgents = [...detailedAgents, ...systemAgents]
    const agent = allAgents.find((a) => a.id === agentId)

    if (!agent) {
      logger.warn(`Agent not found: ${agentId}`)
      return response.status(404).json({ error: 'Agent not found' })
    }

    logger.info(`Returning agent: ${agent.name} for run: ${rid}`)
    response.status(200).json(agent)
  } catch (error) {
    logger.error('Error getting run agent by id:', error)
    response.status(500).json({ error: 'Failed to get run agent' })
  }
}
