import { VercelRequest, VercelResponse } from '@vercel/node'
import { getSimulations, postSimulations } from '../../../../src'

export default function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method === 'GET') {
    return getSimulations(request, response)
  }
  if (request.method === 'POST') {
    return postSimulations(request, response)
  }
  response.status(405).json({ error: 'Method not allowed' })
}
