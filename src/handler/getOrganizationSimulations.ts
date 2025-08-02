import { VercelRequest, VercelResponse } from '@vercel/node'
import { logger } from '../logger'
import { simulations } from '../mocks'
import { projects } from '../mocks/projects'

export function getOrganizationSimulations(request: VercelRequest, response: VercelResponse) {
  try {
    const { oid } = request.query

    if (!oid) {
      return response.status(400).json({ error: 'Organization ID is required' })
    }

    // Get all projects for this organization
    const organizationProjects = projects.filter((project) => project.organization_id === oid)

    if (organizationProjects.length === 0) {
      // Organization exists but has no projects, return empty array
      logger.info(`No projects found for organization ${oid}, returning empty simulations`)
      return response.status(200).json({ simulations: [] })
    }

    // Get all project names for this organization
    const projectNames = organizationProjects.map((project) => project.name)

    // Filter simulations by project names and add project_id
    const organizationSimulations = simulations.simulations
      .filter((simulation) =>
        projectNames.some(
          (projectName) => projectName.toLowerCase() === simulation.project_name.toLowerCase()
        )
      )
      .map((simulation) => {
        // Find the corresponding project to get the project_id
        const project = organizationProjects.find(
          (p) => p.name.toLowerCase() === simulation.project_name.toLowerCase()
        )
        return {
          ...simulation,
          project_id: project?.id || null,
        }
      })

    logger.info(`Returning ${organizationSimulations.length} simulations for organization ${oid}`)
    response.status(200).json({ simulations: organizationSimulations })
  } catch (error) {
    logger.error('Error getting organization simulations:', error)
    response.status(500).json({ error: 'Failed to get organization simulations' })
  }
}
