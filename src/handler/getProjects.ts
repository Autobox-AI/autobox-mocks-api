import { VercelRequest, VercelResponse } from '@vercel/node'
import { logger } from '../logger'
import { projects, simulations } from '../mocks'

export function getProjects(request: VercelRequest, response: VercelResponse) {
  try {
    const { organization_id } = request.query

    let filteredProjects: typeof projects[number][] = [...projects]

    if (organization_id) {
      filteredProjects = projects.filter((project) => project.organization_id === organization_id)
    }

    const projectsWithSimulations = filteredProjects.map(project => {
      const projectSimulations = simulations.filter(sim => 
        sim && sim.project_name && sim.project_name.toLowerCase() === project.name.toLowerCase()
      )
      
      return {
        ...project,
        simulations: projectSimulations.map(sim => ({
          id: sim?.id || '',
          name: sim?.name || '',
          status: sim?.status || 'completed',
          progress: 100,
          started_at: sim?.created_at || '2024-01-01T00:00:00.000Z',
          finished_at: sim?.updated_at || null,
          aborted_at: null
        }))
      }
    })

    logger.info(`Returning ${projectsWithSimulations.length} projects`)
    response.status(200).json({ projects: projectsWithSimulations })
  } catch (error) {
    logger.error('Error getting projects:', error)
    response.status(500).json({ error: 'Failed to get projects' })
  }
}
