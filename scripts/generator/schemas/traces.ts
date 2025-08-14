import { z } from 'zod';

export const TraceSchema = z.object({
  from: z.string().describe("The name of the agent that initiated the trace"),
  to: z.string().describe("The name of the agent that received the trace"),
  content: z.string().describe("The content or message of the trace"),
  is_system_trace: z.boolean().describe(
    "Whether the trace is a system trace. It is a system trace if the FROM and TO agents are between: orchestrator, planner, evaluator, reporter."
  ),
  created_at: z.string().describe(
    "Timestamp when the trace was created. Format ISO 8601. Example: 2024-07-20T10:41:02Z"
  ),
});

export const TracesSchema = z.object({
  traces: z.array(TraceSchema),
});

// Type exports
export type Trace = z.infer<typeof TraceSchema>;
export type Traces = z.infer<typeof TracesSchema>;