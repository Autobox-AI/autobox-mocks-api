import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getOrganizationId } from '../../src'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query
  if (req.method === 'GET') {
    return getOrganizationId(req, res)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
