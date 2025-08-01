import { VercelRequest, VercelResponse } from '@vercel/node'
import { getMetricTemplates, postMetricTemplates } from '../../src'

export default function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method === 'GET') {
    return getMetricTemplates(request, response)
  }
  if (request.method === 'POST') {
    return postMetricTemplates(request, response)
  }
  response.status(405).json({ error: 'Method not allowed' })
}