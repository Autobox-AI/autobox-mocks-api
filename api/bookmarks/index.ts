import { VercelRequest, VercelResponse } from '@vercel/node'
import { getBookmarks, postBookmarks } from '../../src'

export default function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method === 'GET') {
    return getBookmarks(request, response)
  }
  if (request.method === 'POST') {
    return postBookmarks(request, response)
  }
}
