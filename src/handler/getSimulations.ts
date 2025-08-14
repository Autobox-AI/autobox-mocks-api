import { VercelRequest, VercelResponse } from '@vercel/node'
import { logger } from '../logger'
import { simulations } from '../mocks'
import { projects } from '../mocks/projects'

export function getSimulations(request: VercelRequest, response: VercelResponse) {
  try {
    const { pid } = request.query

    let filteredSimulations = simulations

    if (pid) {
      const project = projects.find((p) => p.id === pid)

      if (project) {
        filteredSimulations = simulations.filter((sim) => sim.project_name === project.name)
      } else {
        // If no project found, return empty array
        filteredSimulations = []
      }
    }

    logger.info(`Returning ${filteredSimulations.length} simulations`)
    response.status(200).json({ simulations: filteredSimulations })
  } catch (error) {
    logger.error('Error getting simulations:', error)
    response.status(500).json({ error: 'Failed to get simulations' })
  }
}
