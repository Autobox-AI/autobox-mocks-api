import { VercelRequest, VercelResponse } from '@vercel/node'
import { getProjects, postProjects } from '../../src'

export default function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method === 'GET') {
    return getProjects(request, response)
  }
  if (request.method === 'POST') {
    return postProjects(request, response)
  }
  response.status(405).json({ error: 'Method not allowed' })
}
