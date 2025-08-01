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

      // Only stream for "in progress" status (with space)
      if (run.status === 'in progress') {
        // For in-progress runs, simulate streaming one trace at a time
        const sortedTraces = traces.sort((a, b) => {
          const dateA = new Date(a.created_at).getTime()
          const dateB = new Date(b.created_at).getTime()
          return dateA - dateB // ASC order for chronological streaming
        })

        let traceIndex = 0
        const totalTraces = sortedTraces.length
        const maxIterations = 3 // Send traces 3 times to simulate ongoing activity
        
        const sendNextTrace = () => {
          if (traceIndex < totalTraces * maxIterations) {
            const originalIndex = traceIndex % totalTraces
            const iteration = Math.floor(traceIndex / totalTraces)
            const trace = sortedTraces[originalIndex]
            
            // Create a modified copy with updated timestamp for iterations > 0
            const now = new Date()
            const modifiedTrace = iteration === 0 ? trace : {
              ...trace,
              created_at: new Date(now.getTime() + (traceIndex * 1000)).toISOString(),
              content: `[Iteration ${iteration + 1}] ${trace.content}`
            }
            
            const traceData = JSON.stringify(modifiedTrace)
            response.write(`data: ${traceData}\n\n`)
            
            traceIndex++
            // Send next trace after a delay (500ms to 1500ms for realistic simulation)
            setTimeout(sendNextTrace, 500 + Math.random() * 1000)
          } else {
            // All traces sent, complete the stream
            response.write('data: [DONE]\n\n')
            response.end()
          }
        }
        
        // Start streaming
        sendNextTrace()
        return
      } else {
        // For completed or other statuses, send all traces immediately
        const sortedTraces = traces.sort((a, b) => {
          const dateA = new Date(a.created_at).getTime()
          const dateB = new Date(b.created_at).getTime()
          return dateB - dateA // DESC order for completed
        })

        for (const trace of sortedTraces) {
          const traceData = JSON.stringify(trace)
          response.write(`data: ${traceData}\n\n`)
        }

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
