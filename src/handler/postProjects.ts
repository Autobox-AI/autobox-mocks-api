import { VercelRequest, VercelResponse } from '@vercel/node'
import { logger } from '../logger'
import { getRandomMessage } from '../utils'

export function postProjects(request: VercelRequest, response: VercelResponse) {
  try {
    const projectData = request.body
    
    const newProject = {
      id: Math.random().toString(36).substring(2, 15),
      ...projectData,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      status: 'active'
    }
    
    logger.info('Creating new project:', newProject.name)
    response.status(201).json({ 
      ...newProject, 
      message: getRandomMessage() 
    })
  } catch (error) {
    logger.error('Error creating project:', error)
    response.status(500).json({ error: 'Failed to create project' })
  }
}