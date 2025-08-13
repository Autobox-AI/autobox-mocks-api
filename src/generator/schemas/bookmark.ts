import { z } from 'zod';

export const BookmarkSchema = z.object({
  id: z.string(),
  organization_id: z.string(),
  type: z.string(), // "project" or "simulation"
  item_id: z.string(),
  item_name: z.string(),
  item_description: z.string().nullable().optional(),
  project_id: z.string().nullable().optional(),
  project_name: z.string().nullable().optional(),
  created_at: z.date(),
  updated_at: z.date().nullable().optional(),
});

// Type export
export type Bookmark = z.infer<typeof BookmarkSchema>;