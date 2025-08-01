import { VercelRequest, VercelResponse } from '@vercel/node'
import { getRunAgentTraces } from '../../../../../src'

export default function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method === 'GET') {
    return getRunAgentTraces(request, response)
  }
  response.status(405).json({ error: 'Method not allowed' })
}