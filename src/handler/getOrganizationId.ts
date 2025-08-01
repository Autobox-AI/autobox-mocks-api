import { VercelRequest, VercelResponse } from '@vercel/node'
import { organizations } from '../mocks'

export const getOrganizationId = (request: VercelRequest, response: VercelResponse) => {
  const { oid } = request.query
  const organization = organizations.find((organization) => organization.id === oid)
  if (!organization) {
    response.status(404).json({ error: 'Organization not found' })
  }
  response.status(200).json(organization)
}
