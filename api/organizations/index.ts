import { VercelRequest, VercelResponse } from '@vercel/node'
import { getOrganizations } from '../../src'

export default function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method === 'GET') {
    return getOrganizations(request, response)
  }
}
