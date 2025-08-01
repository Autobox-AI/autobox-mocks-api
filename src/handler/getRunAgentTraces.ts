import { VercelRequest, VercelResponse } from '@vercel/node'
import { runs } from '../mocks'
import { logger } from '../logger'

export function getRunAgentTraces(request: VercelRequest, response: VercelResponse) {
  try {
    const { rid, agentId } = request.query
    
    const runEntry = runs.find(r => r.run && r.run.id === rid)
    
    if (!runEntry) {
      logger.warn(`Run not found: ${rid}`)
      return response.status(404).json({ error: 'Run not found' })
    }
    
    // Filter traces for specific agent - check 'from' and 'to' fields
    const agentTraces = (runEntry.traces || []).filter(trace => 
      trace.from === agentId || 
      trace.to === agentId ||
      (typeof trace.from === 'string' && trace.from.includes(agentId as string)) ||
      (typeof trace.to === 'string' && trace.to.includes(agentId as string))
    )
    
    logger.info(`Returning ${agentTraces.length} traces for agent: ${agentId}`)
    response.status(200).json(agentTraces)
  } catch (error) {
    logger.error('Error getting run agent traces:', error)
    response.status(500).json({ error: 'Failed to get run agent traces' })
  }
}