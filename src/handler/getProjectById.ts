import { VercelRequest, VercelResponse } from '@vercel/node'
import { projects } from '../mocks'
import { logger } from '../logger'

export function getProjectById(request: VercelRequest, response: VercelResponse) {
  try {
    const { pid } = request.query
    
    const project = projects.find(p => p.id === pid)
    
    if (!project) {
      logger.warn(`Project not found: ${pid}`)
      return response.status(404).json({ error: 'Project not found' })
    }
    
    logger.info(`Returning project: ${project.name}`)
    response.status(200).json(project)
  } catch (error) {
    logger.error('Error getting project by id:', error)
    response.status(500).json({ error: 'Failed to get project' })
  }
}