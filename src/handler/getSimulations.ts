import { VercelRequest, VercelResponse } from '@vercel/node'
import { logger } from '../logger'
import { simulations } from '../mocks'
import { projects } from '../mocks/projects'
import { runs } from '../mocks/runs'

export function getSimulations(request: VercelRequest, response: VercelResponse) {
  try {
    const { pid } = request.query

    let filteredSimulations: readonly (typeof simulations)[number][] = simulations

    if (pid) {
      const project = projects.find((p) => p.id === pid)

      if (project) {
        filteredSimulations = simulations.filter((sim) => sim?.project_name === project.name)
      } else {
        filteredSimulations = []
      }
    }

    const simulationsWithRunsCount = filteredSimulations.map(sim => {
      const runsCount = sim ? runs.filter(run => run.simulation_id === sim.id).length : 0
      return {
        ...sim,
        runs: runsCount
      }
    })

    logger.info(`Returning ${simulationsWithRunsCount.length} simulations`)
    response.status(200).json({ simulations: simulationsWithRunsCount })
  } catch (error) {
    logger.error('Error getting simulations:', error)
    response.status(500).json({ error: 'Failed to get simulations' })
  }
}
