import { VercelRequest, VercelResponse } from '@vercel/node'
import { logger } from '../logger'
import { runs } from '../mocks'
import { simulations } from '../mocks/simulations'

export function getRunAgents(request: VercelRequest, response: VercelResponse) {
  try {
    const { rid } = request.query

    const runEntry = runs.find((r) => r.run && r.run.id === rid)

    if (!runEntry) {
      logger.warn(`Run not found: ${rid}`)
      return response.status(404).json({ error: 'Run not found' })
    }

    const run = runEntry.run

    // Find the simulation to get detailed agent information
    const simulation = simulations.simulations.find(s => s.id === run.simulation_id)

    if (!simulation) {
      logger.warn(`Simulation not found for run: ${rid}`)
      return response.status(404).json({ error: 'Simulation not found' })
    }

    // Get detailed agent information from simulation
    const detailedAgents = simulation.agents.map(agent => ({
      id: agent.id,
      name: agent.name,
      description: agent.description,
      role: agent.role,
      backstory: agent.backstory,
      instructions: agent.instructions || null
    }))

    // Add system agents (orchestrator, evaluator, planner, reporter) with basic info
    const systemAgents = [
      {
        id: simulation.orchestrator.id,
        name: simulation.orchestrator.name,
        description: 'Orchestrates the simulation flow and coordinates agent interactions',
        role: 'orchestrator',
        backstory: 'System agent responsible for managing simulation execution',
        instructions: null
      },
      {
        id: simulation.evaluator.id,
        name: simulation.evaluator.name,
        description: 'Evaluates simulation outcomes and agent performance',
        role: 'evaluator',
        backstory: 'System agent responsible for assessing simulation results',
        instructions: null
      },
      {
        id: simulation.planner.id,
        name: simulation.planner.name,
        description: 'Creates and manages execution plans for the simulation',
        role: 'planner',
        backstory: 'System agent responsible for simulation planning and strategy',
        instructions: null
      },
      {
        id: simulation.reporter.id,
        name: simulation.reporter.name,
        description: 'Generates summaries and reports of simulation results',
        role: 'reporter',
        backstory: 'System agent responsible for documentation and reporting',
        instructions: null
      }
    ]

    const agents = [...detailedAgents, ...systemAgents]

    logger.info(`Returning ${agents.length} agents for run: ${rid}`)
    response.status(200).json({ agents })
  } catch (error) {
    logger.error('Error getting run agents:', error)
    response.status(500).json({ error: 'Failed to get run agents' })
  }
}
