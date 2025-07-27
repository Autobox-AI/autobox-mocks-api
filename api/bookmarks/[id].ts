import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getBookmarkId } from '../../src'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query
  if (req.method === 'GET') {
    return getBookmarkId(req, res)
  } else if (req.method === 'DELETE') {
    res.status(200).json({ userId: id, message: 'Dummy bookmark deleted' })
  } else {
    res.setHeader('Allow', ['GET', 'DELETE'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
