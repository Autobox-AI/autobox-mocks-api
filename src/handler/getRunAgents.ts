import { VercelRequest, VercelResponse } from '@vercel/node'
import { logger } from '../logger'
import { runs } from '../mocks'

export function getRunAgents(request: VercelRequest, response: VercelResponse) {
  try {
    const { rid } = request.query

    const runEntry = runs.find((r) => r.run && r.run.id === rid)

    if (!runEntry) {
      logger.warn(`Run not found: ${rid}`)
      return response.status(404).json({ error: 'Run not found' })
    }

    const run = runEntry.run

    // Return all agents from the run (workers + orchestrator + evaluator + planner + reporter)
    const agents = [
      ...(run.workers || []),
      { id: run.orchestrator_id, name: 'orchestrator' },
      { id: run.evaluator_id, name: 'evaluator' },
      { id: run.planner_id, name: 'planner' },
      { id: run.reporter_id, name: 'reporter' },
    ].filter(Boolean)

    logger.info(`Returning ${agents.length} agents for run: ${rid}`)
    response.status(200).json({ agents })
  } catch (error) {
    logger.error('Error getting run agents:', error)
    response.status(500).json({ error: 'Failed to get run agents' })
  }
}
