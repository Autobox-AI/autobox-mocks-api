import { VercelRequest, VercelResponse } from '@vercel/node'
import { getRandomMessage } from '../src'

export const getOrganizations = (request: VercelRequest, response: VercelResponse) => {
  const randomMessage = getRandomMessage()
  response.status(200).send(`Hello, ${randomMessage}`)
}

export default getOrganizations
