import { VercelRequest, VercelResponse } from '@vercel/node'
import { organizations } from '../mocks'

export const getOrganizations = (request: VercelRequest, response: VercelResponse) => {
  response.status(200).json(organizations)
}
