import { VercelRequest, VercelResponse } from '@vercel/node'
import { logger } from '../logger'
import { simulations } from '../mocks'

export function getSimulationById(request: VercelRequest, response: VercelResponse) {
  try {
    const { id } = request.query

    const simulation = simulations.simulations.find((s) => s.id === id)

    if (!simulation) {
      logger.warn(`Simulation not found: ${id}`)
      return response.status(404).json({ error: 'Simulation not found' })
    }

    logger.info(`Returning simulation: ${simulation.name}`)
    response.status(200).json(simulation)
  } catch (error) {
    logger.error('Error getting simulation by id:', error)
    response.status(500).json({ error: 'Failed to get simulation' })
  }
}
