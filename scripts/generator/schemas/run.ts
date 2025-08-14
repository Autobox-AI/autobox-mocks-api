import { z } from 'zod';

export const RunSchema = z.object({
  id: z.string(),
  simulation_id: z.string(),
  status: z.string().describe(
    "The status of the run: in progress, completed, failed, aborted, timeout, created"
  ),
  progress: z.number().int().min(0).max(100).default(0).describe(
    "The progress of the run, from 0 to 100"
  ),
  started_at: z.string(),
  finished_at: z.string().nullable().optional(),
  aborted_at: z.string().nullable().optional(),
  updated_at: z.string().nullable().optional(),
  summary: z.string().nullable().optional().describe(
    "The summary of the run when completed, otherwise None"
  ),
});

// Type export
export type Run = z.infer<typeof RunSchema>;