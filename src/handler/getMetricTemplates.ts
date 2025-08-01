import { VercelRequest, VercelResponse } from '@vercel/node'
import { metricDefinitions } from '../mocks'
import { logger } from '../logger'

export function getMetricTemplates(request: VercelRequest, response: VercelResponse) {
  try {
    // Convert metricDefinitions object to array format
    const templates = Object.values(metricDefinitions).flat()
    
    logger.info(`Returning ${templates.length} metric templates`)
    response.status(200).json(templates)
  } catch (error) {
    logger.error('Error getting metric templates:', error)
    response.status(500).json({ error: 'Failed to get metric templates' })
  }
}