import { VercelRequest, VercelResponse } from '@vercel/node'

export const deleteBookmark = (request: VercelRequest, response: VercelResponse) => {
  response.status(200).send('This is a DELETE bookmarks Handler')
}
