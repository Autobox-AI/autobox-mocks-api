import { VercelRequest, VercelResponse } from '@vercel/node'
import { logger } from '../logger'
import { projects } from '../mocks'

export function getProjects(request: VercelRequest, response: VercelResponse) {
  try {
    const { organization_id } = request.query

    let filteredProjects = projects

    if (organization_id) {
      filteredProjects = projects.filter((project) => project.organization_id === organization_id)
    }

    logger.info(`Returning ${filteredProjects.length} projects`)
    response.status(200).json({ projects: filteredProjects })
  } catch (error) {
    logger.error('Error getting projects:', error)
    response.status(500).json({ error: 'Failed to get projects' })
  }
}
