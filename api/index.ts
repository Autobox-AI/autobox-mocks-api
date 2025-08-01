import { VercelRequest, VercelResponse } from '@vercel/node'

export default function index(request: VercelRequest, response: VercelResponse) {
  response.status(200).send('welcome to the autobox mocks api')
}
