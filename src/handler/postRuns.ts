import { VercelRequest, VercelResponse } from '@vercel/node'
import { logger } from '../logger'
import { getRandomMessage } from '../utils'

export function postRuns(request: VercelRequest, response: VercelResponse) {
  try {
    const runData = request.body
    
    const newRun = {
      id: Math.random().toString(36).substring(2, 15),
      ...runData,
      status: 'created',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      started_at: null,
      ended_at: null,
      duration: null
    }
    
    logger.info('Creating new run for simulation:', runData.simulation_id)
    response.status(201).json({ 
      ...newRun, 
      message: getRandomMessage() 
    })
  } catch (error) {
    logger.error('Error creating run:', error)
    response.status(500).json({ error: 'Failed to create run' })
  }
}