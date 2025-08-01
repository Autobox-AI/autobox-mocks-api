import { VercelRequest, VercelResponse } from '@vercel/node'
import { logger } from '../logger'
import { getRandomMessage } from '../utils'

export function postMetricTemplates(request: VercelRequest, response: VercelResponse) {
  try {
    const templateData = request.body
    
    const newTemplate = {
      id: Math.random().toString(36).substring(2, 15),
      ...templateData,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
    
    logger.info('Creating new metric template:', newTemplate.name)
    response.status(201).json({ 
      ...newTemplate, 
      message: getRandomMessage() 
    })
  } catch (error) {
    logger.error('Error creating metric template:', error)
    response.status(500).json({ error: 'Failed to create metric template' })
  }
}