import { z } from 'zod';

const now = new Date();
const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

export const TagDefinitionSchema = z.object({
  tag: z.string().describe("The tag name. Example: 'agent_name'"),
  description: z.string().describe("The description of the tag."),
});

export const TagValueSchema = z.object({
  key: z.string().describe("The key of the tag. Example: 'agent_name'"),
  value: z.string().describe("The value of the tag. Example: 'agent_1'"),
});

export const MetricDefinitionSchema = z.object({
  name: z.string().describe("The name of the metric."),
  description: z.string().describe("The description of the metric."),
  type: z.enum(['counter', 'gauge', 'histogram', 'summary']).describe(
    "The type of the metric. This should be one of the following: counter, gauge, histogram, summary."
  ),
  tags: z.array(TagDefinitionSchema),
  unit: z.string().describe(
    "The unit of the metric. Example: 'tasks', 'seconds', 'requests', 'bytes', etc."
  ),
});

export const MetricDefinitionsSchema = z.object({
  metrics: z.array(MetricDefinitionSchema),
});

export const CounterMetricSchema = z.object({
  dt: z.string().transform((str) => new Date(str)).describe(
    `The datetime of the metric. This should be a datetime string between ${oneMonthAgo.toISOString()} and ${now.toISOString()}`
  ),
  type: z.literal('counter').describe(
    "The type of the metric. This should be one of the following: counter."
  ),
  value: z.number().positive().describe(
    "The value of the metric. This should be a positive number and incremental."
  ),
});

export const GaugeMetricSchema = z.object({
  dt: z.string().transform((str) => new Date(str)).describe(
    `The datetime of the metric. This should be a datetime string between ${oneMonthAgo.toISOString()} and ${now.toISOString()}`
  ),
  type: z.literal('gauge').describe(
    "The type of the metric. This should be one of the following: gauge."
  ),
  value: z.number().positive().describe(
    "The value of the metric. This should be a positive number and can go up or down."
  ),
});

export const BucketSchema = z.object({
  le: z.number().describe("The upper bound of the bucket."),
  count: z.number().int().describe("The count of the bucket."),
});

export const HistogramMetricSchema = z.object({
  dt: z.string().transform((str) => new Date(str)).describe(
    `The datetime of the metric. This should be a datetime string between ${oneMonthAgo.toISOString()} and ${now.toISOString()}`
  ),
  type: z.literal('histogram').describe(
    "The type of the metric. This should be one of the following: histogram."
  ),
  count: z.number().int().positive().describe(
    "The count of the metric. This should be a positive number."
  ),
  sum: z.number().positive().describe(
    "The sum of the metric. This should be a positive number."
  ),
  buckets: z.array(BucketSchema),
});

export const QuantileSchema = z.object({
  quantile: z.number().min(0).max(1).describe(
    "The quantile of the metric. This should be a positive number between 0 and 1."
  ),
  value: z.number().positive().describe(
    "The value of the metric. This should be a positive number."
  ),
});

export const SummaryMetricSchema = z.object({
  dt: z.string().transform((str) => new Date(str)).describe(
    `The datetime of the metric. This should be a datetime string between ${oneMonthAgo.toISOString()} and ${now.toISOString()}`
  ),
  type: z.literal('summary').describe(
    "The type of the metric. This should be one of the following: summary."
  ),
  count: z.number().int().positive().describe(
    "The count of the metric. This should be a positive number."
  ),
  sum: z.number().positive().describe(
    "The sum of the metric. This should be a positive number."
  ),
  quantiles: z.array(QuantileSchema),
});

export const MetricValueSchema = z.object({
  name: z.string().describe("The name of the metric."),
  data: z.array(
    z.union([
      CounterMetricSchema,
      GaugeMetricSchema,
      HistogramMetricSchema,
      SummaryMetricSchema,
    ])
  ).describe(
    "The data values of the metric based on the type of the metric."
  ),
  type: z.enum(['counter', 'gauge', 'histogram', 'summary']).describe(
    "The type of the metric. This should be one of the following: counter, gauge, histogram, summary."
  ),
  tags: z.array(TagValueSchema),
  unit: z.string().describe(
    "The unit of the metric. Example: '%', 'USD', 'tasks', 'seconds', 'requests', 'bytes', etc."
  ),
});

export const MetricValuesSchema = z.object({
  metrics: z.array(MetricValueSchema),
});

// Type exports
export type TagDefinition = z.infer<typeof TagDefinitionSchema>;
export type TagValue = z.infer<typeof TagValueSchema>;
export type MetricDefinition = z.infer<typeof MetricDefinitionSchema>;
export type MetricDefinitions = z.infer<typeof MetricDefinitionsSchema>;
export type CounterMetric = z.infer<typeof CounterMetricSchema>;
export type GaugeMetric = z.infer<typeof GaugeMetricSchema>;
export type Bucket = z.infer<typeof BucketSchema>;
export type HistogramMetric = z.infer<typeof HistogramMetricSchema>;
export type Quantile = z.infer<typeof QuantileSchema>;
export type SummaryMetric = z.infer<typeof SummaryMetricSchema>;
export type MetricValue = z.infer<typeof MetricValueSchema>;
export type MetricValues = z.infer<typeof MetricValuesSchema>;