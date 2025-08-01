import { VercelRequest, VercelResponse } from '@vercel/node'
import { runs } from '../mocks'
import { logger } from '../logger'

export function getRunById(request: VercelRequest, response: VercelResponse) {
  try {
    const { rid } = request.query
    
    const runEntry = runs.find(r => r.run && r.run.id === rid)
    
    if (!runEntry) {
      logger.warn(`Run not found: ${rid}`)
      return response.status(404).json({ error: 'Run not found' })
    }
    
    logger.info(`Returning run: ${runEntry.run.id}`)
    response.status(200).json(runEntry.run)
  } catch (error) {
    logger.error('Error getting run by id:', error)
    response.status(500).json({ error: 'Failed to get run' })
  }
}