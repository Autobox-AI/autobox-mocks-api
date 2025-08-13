import { randomUUID as uuidv4 } from 'crypto';
import { Bookmark } from '../schemas/bookmark';
import { settings } from '../config/settings';

export function generateBookmarks(projects: any[], simulations: any[]): Bookmark[] {
  const bookmarks: Bookmark[] = [];
  
  // Bookmark some projects
  const projectsToBookmark = projects.slice(0, 2);
  for (const project of projectsToBookmark) {
    bookmarks.push({
      id: uuidv4(),
      organization_id: settings.autoboxMarsOrganizationId,
      type: 'project',
      item_id: project.id,
      item_name: project.name,
      item_description: project.description,
      project_id: project.id,
      project_name: project.name,
      created_at: new Date(),
      updated_at: new Date(),
    });
  }
  
  // Bookmark some simulations
  const simulationsToBookmark = simulations.slice(0, 3);
  for (const simulation of simulationsToBookmark) {
    bookmarks.push({
      id: uuidv4(),
      organization_id: settings.autoboxMarsOrganizationId,
      type: 'simulation',
      item_id: simulation.id,
      item_name: simulation.name,
      item_description: simulation.description,
      project_id: null,
      project_name: simulation.project_name,
      created_at: new Date(),
      updated_at: new Date(),
    });
  }
  
  return bookmarks;
}