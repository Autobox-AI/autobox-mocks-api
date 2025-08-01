import { VercelRequest, VercelResponse } from '@vercel/node'
import { getRuns, postRuns } from '../../../src'

export default function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method === 'GET') {
    return getRuns(request, response)
  }
  if (request.method === 'POST') {
    return postRuns(request, response)
  }
  response.status(405).json({ error: 'Method not allowed' })
}