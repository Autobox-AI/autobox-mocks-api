import { VercelRequest, VercelResponse } from '@vercel/node'
import { logger } from '../logger'
import { getRandomMessage } from '../utils'

export function postSimulations(request: VercelRequest, response: VercelResponse) {
  try {
    const simulationData = request.body
    
    const newSimulation = {
      id: Math.random().toString(36).substring(2, 15),
      ...simulationData,
      status: 'draft',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      total_runs: 0
    }
    
    logger.info('Creating new simulation:', newSimulation.name)
    response.status(201).json({ 
      ...newSimulation, 
      message: getRandomMessage() 
    })
  } catch (error) {
    logger.error('Error creating simulation:', error)
    response.status(500).json({ error: 'Failed to create simulation' })
  }
}