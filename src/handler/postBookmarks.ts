import { VercelRequest, VercelResponse } from '@vercel/node'

export const postBookmarks = (request: VercelRequest, response: VercelResponse) => {
  response.status(200).json({ message: 'Dummy bookmark created' })
}
