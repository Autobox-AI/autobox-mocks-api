import { randomUUID as uuidv4 } from 'crypto'
import { settings } from '../config/settings'
import { Bookmark } from '../schemas/bookmark'

export function generateBookmarks(projects: any[], simulations: any[]): Bookmark[] {
  const bookmarks: Bookmark[] = []

  const maxCount = Math.min(projects.length, 5)
  const randomCount = Math.floor(Math.random() * (maxCount + 1))
  const projectsToBookmark = projects.slice(0, randomCount)

  for (const project of projectsToBookmark) {
    bookmarks.push({
      id: uuidv4(),
      organization_id: settings.organizationId,
      type: 'project',
      item_id: project.id,
      item_name: project.name,
      item_description: project.description,
      project_id: project.id,
      project_name: project.name,
      created_at: new Date(),
      updated_at: new Date(),
    })
  }

  const maxSimulationsToBookmark = Math.min(simulations.length, 5)
  const randomSimulationsCount = Math.floor(Math.random() * (maxSimulationsToBookmark + 1))
  const simulationsToBookmark = simulations.slice(0, randomSimulationsCount)

  for (const simulation of simulationsToBookmark) {
    const project = projects.find(
      (p) => p.name.toLowerCase() === simulation.project_name.toLowerCase()
    )

    bookmarks.push({
      id: uuidv4(),
      organization_id: settings.organizationId,
      type: 'simulation',
      item_id: simulation.id,
      item_name: simulation.name,
      item_description: simulation.description,
      project_id: project?.id || null,
      project_name: simulation.project_name,
      created_at: new Date(),
      updated_at: new Date(),
    })
  }

  return bookmarks
}
