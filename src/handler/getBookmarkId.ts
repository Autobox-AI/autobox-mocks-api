import { VercelRequest, VercelResponse } from '@vercel/node'
import { bookmarks } from '../mocks'

export const getBookmarkId = (request: VercelRequest, response: VercelResponse) => {
  const { id } = request.query
  const bookmark = bookmarks.find((bookmark) => bookmark.id === id)
  if (!bookmark) {
    response.status(404).json({ error: 'Bookmark not found' })
  }
  response.status(200).json(bookmark)
}
