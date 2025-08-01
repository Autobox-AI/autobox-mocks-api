import { VercelRequest, VercelResponse } from '@vercel/node'
import { runs } from '../mocks'
import { logger } from '../logger'

export function getRunAgentById(request: VercelRequest, response: VercelResponse) {
  try {
    const { rid, agentId } = request.query
    
    const runEntry = runs.find(r => r.run && r.run.id === rid)
    
    if (!runEntry) {
      logger.warn(`Run not found: ${rid}`)
      return response.status(404).json({ error: 'Run not found' })
    }
    
    const run = runEntry.run
    
    // Find agent in workers, orchestrator, evaluator, planner, or reporter
    const agents = [
      ...(run.workers || []),
      { id: run.orchestrator_id, name: 'orchestrator' },
      { id: run.evaluator_id, name: 'evaluator' },
      { id: run.planner_id, name: 'planner' },
      { id: run.reporter_id, name: 'reporter' }
    ].filter(Boolean)
    
    const agent = agents.find(a => a.id === agentId)
    
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