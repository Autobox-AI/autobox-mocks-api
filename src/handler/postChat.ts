import { VercelRequest, VercelResponse } from '@vercel/node'
import { getChatResponse } from '../mocks/chat'

export const postChat = (request: VercelRequest, response: VercelResponse) => {
  // Enable CORS
  response.setHeader('Access-Control-Allow-Credentials', 'true')
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  response.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (request.method === 'OPTIONS') {
    response.status(200).end()
    return
  }

  const { message } = request.body || {}
  
  if (!message) {
    return response.status(400).json({ error: 'Message is required' })
  }

  const chatResponse = getChatResponse(message)
  
  // Add a small delay to simulate processing
  setTimeout(() => {
    response.status(200).json(chatResponse)
  }, 500)
}