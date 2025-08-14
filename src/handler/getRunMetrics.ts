import { VercelRequest, VercelResponse } from '@vercel/node'
import { runs, metricValues } from '../mocks'
import { logger } from '../logger'

export function getRunMetrics(request: VercelRequest, response: VercelResponse) {
  try {
    const { rid } = request.query
    
    const run = runs.find(r => r.id === rid)
    
    if (!run) {
      logger.warn(`Run not found: ${rid}`)
      return response.status(404).json({ error: 'Run not found' })
    }
    
    // Find metrics for this run
    const rawMetrics = (metricValues as any)[rid as string] || []
    
    // Transform metrics to match frontend expected format
    const transformedMetrics = rawMetrics.map((metric: any) => {
      // Transform data points
      const transformedData = metric.data.map((point: any) => {
        // Convert tags array to Record<string, string>
        const tagsRecord: Record<string, string> = {}
        if (metric.tags) {
          metric.tags.forEach((tag: any) => {
            tagsRecord[tag.key] = tag.value
          })
        }
        
        return {
          time: point.dt, // Rename dt to time
          value: point.value,
          tags: tagsRecord
        }
      })
      
      // Transform tag definitions from tags array
      const tagDefinitions = metric.tags ? metric.tags.map((tag: any) => ({
        tag: tag.key,
        description: `Tag for ${tag.key}`
      })) : []
      
      return {
        name: metric.name,
        description: metric.description || `Metric for ${metric.name}`,
        unit: metric.unit,
        type: metric.type || 'counter',
        data: transformedData,
        tag_definitions: tagDefinitions
      }
    })
    
    logger.info(`Returning ${transformedMetrics.length} metrics for run: ${rid}`)
    response.status(200).json({ metrics: transformedMetrics })
  } catch (error) {
    logger.error('Error getting run metrics:', error)
    response.status(500).json({ error: 'Failed to get run metrics' })
  }
}