import { VercelRequest, VercelResponse } from '@vercel/node'
import { logger } from '../logger'
import { runs } from '../mocks'

export function getRuns(request: VercelRequest, response: VercelResponse) {
  try {
    const { id: simulation_id } = request.query

    let filteredRuns: readonly (typeof runs)[number][] = runs

    if (simulation_id) {
      filteredRuns = runs.filter((runEntry) => runEntry && runEntry.simulation_id === simulation_id)
    }

    const transformedRuns = filteredRuns.map((runEntry) => runEntry)

    const responseData = {
      total: transformedRuns.length,
      runs: transformedRuns,
    }

    logger.info(`Returning ${transformedRuns.length} runs`)
    response.status(200).json(responseData)
  } catch (error) {
    logger.error('Error getting runs:', error)
    response.status(500).json({ error: 'Failed to get runs' })
  }
}
