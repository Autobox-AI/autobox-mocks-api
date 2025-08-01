import { VercelRequest, VercelResponse } from '@vercel/node'
import { runs } from '../mocks'
import { logger } from '../logger'
import { getRandomMessage } from '../utils'

export function updateRunAgent(request: VercelRequest, response: VercelResponse) {
  try {
    const { rid, agentId } = request.query
    const updateData = request.body
    
    const runEntry = runs.find(r => r.run && r.run.id === rid)
    
    if (!runEntry) {
      logger.warn(`Run not found: ${rid}`)
      return response.status(404).json({ error: 'Run not found' })
    }
    
    // Find agent in workers, orchestrator, evaluator, planner, or reporter
    const agents = [
      ...(runEntry.run.workers || [])
    ].filter(Boolean)
    
    const agent = agents.find(a => a.id === agentId)
    
    if (!agent) {
      logger.warn(`Agent not found: ${agentId}`)
      return response.status(404).json({ error: 'Agent not found' })
    }
    
    // Mock update - return updated agent data
    const updatedAgent = {
      ...agent,
      ...updateData,
      updated_at: new Date().toISOString()
    }
    
    logger.info(`Updated agent: ${agent.name} for run: ${rid}`)
    response.status(200).json({ 
      ...updatedAgent, 
      message: getRandomMessage() 
    })
  } catch (error) {
    logger.error('Error updating run agent:', error)
    response.status(500).json({ error: 'Failed to update run agent' })
  }
}