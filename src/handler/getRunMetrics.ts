import { VercelRequest, VercelResponse } from '@vercel/node'
import { runs, metricValues } from '../mocks'
import { logger } from '../logger'

export function getRunMetrics(request: VercelRequest, response: VercelResponse) {
  try {
    const { rid } = request.query
    
    const runEntry = runs.find(r => r.run && r.run.id === rid)
    
    if (!runEntry) {
      logger.warn(`Run not found: ${rid}`)
      return response.status(404).json({ error: 'Run not found' })
    }
    
    // Find metrics for this run
    const runMetrics = (metricValues as any)[rid as string] || []
    
    logger.info(`Returning ${runMetrics.length} metrics for run: ${rid}`)
    response.status(200).json({ metrics: runMetrics })
  } catch (error) {
    logger.error('Error getting run metrics:', error)
    response.status(500).json({ error: 'Failed to get run metrics' })
  }
}