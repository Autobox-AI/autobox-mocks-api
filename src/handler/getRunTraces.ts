import { VercelRequest, VercelResponse } from '@vercel/node'
import { logger } from '../logger'
import { runs } from '../mocks'

export function getRunTraces(request: VercelRequest, response: VercelResponse) {
  try {
    const { rid, stream } = request.query
    const isStreaming = stream === 'true'

    const runEntry = runs.find((r) => r.run && r.run.id === rid)

    if (!runEntry) {
      logger.warn(`Run not found: ${rid}`)
      return response.status(404).json({ error: 'Run not found' })
    }

    const traces = runEntry.traces || []
    const run = runEntry.run

    if (isStreaming) {
      response.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'X-Accel-Buffering': 'no',
      })

      if (run.status === 'completed') {
        // For completed runs, send all traces immediately
        const sortedTraces = traces.sort((a, b) => {
          const dateA = new Date(a.created_at).getTime()
          const dateB = new Date(b.created_at).getTime()
          return dateB - dateA
        })

        for (const trace of sortedTraces) {
          const traceData = JSON.stringify(trace)
          response.write(`data: ${traceData}\n\n`)
        }

        response.write('data: [DONE]\n\n')
        response.end()
        return
      } else {
        // For non-completed runs, duplicate traces up to 10 times then complete
        const sortedTraces = traces.sort((a, b) => {
          const dateA = new Date(a.created_at).getTime()
          const dateB = new Date(b.created_at).getTime()
          return dateA - dateB
        })

        // Send original traces first
        for (const trace of sortedTraces) {
          const traceData = JSON.stringify(trace)
          response.write(`data: ${traceData}\n\n`)
        }

        // Duplicate traces up to 10 additional times
        for (let i = 0; i < 10; i++) {
          for (const trace of sortedTraces) {
            // Create a modified copy with updated timestamp
            const now = new Date()
            const duplicatedTrace = {
              ...trace,
              created_at: new Date(now.getTime() + i * 1000).toISOString(),
              content: `[Simulated] ${trace.content}`
            }
            const traceData = JSON.stringify(duplicatedTrace)
            response.write(`data: ${traceData}\n\n`)
          }
        }

        // Complete the run
        response.write('data: [DONE]\n\n')
        response.end()
        return
      }
    } else {
      // Non-streaming response (original behavior)
      const sortedTraces = traces.sort((a, b) => {
        const dateA = new Date(a.created_at).getTime()
        const dateB = new Date(b.created_at).getTime()
        return dateB - dateA
      })

      logger.info(`Returning ${sortedTraces.length} traces for run: ${rid}`)
      response.status(200).json({ traces: sortedTraces })
    }
  } catch (error) {
    logger.error('Error getting run traces:', error)
    response.status(500).json({ error: 'Failed to get run traces' })
  }
}
