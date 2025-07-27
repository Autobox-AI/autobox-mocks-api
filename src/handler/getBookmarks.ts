import { VercelRequest, VercelResponse } from '@vercel/node'
import { bookmarks } from '../mocks'

export const getBookmarks = (request: VercelRequest, response: VercelResponse) => {
  response.status(200).json(bookmarks)
}
