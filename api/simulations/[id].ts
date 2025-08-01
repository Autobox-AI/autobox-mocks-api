import { VercelRequest, VercelResponse } from '@vercel/node'
import { getSimulationById } from '../../src'

export default function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method === 'GET') {
    return getSimulationById(request, response)
  }
  response.status(405).json({ error: 'Method not allowed' })
}