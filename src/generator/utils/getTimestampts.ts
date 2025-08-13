interface Timestamps {
  started_at: string
  finished_at?: string
  aborted_at?: string
  updated_at?: string
}

export const getTimestamps = (status: string, simulationCreatedAt: string): Timestamps => {
  // Parse the simulation creation time
  const simCreated = new Date(simulationCreatedAt)

  // Add a random time delta between 1 minute and 1 hour after simulation creation
  const randomMinutes = Math.floor(Math.random() * 60) + 1
  const startedAt = new Date(simCreated.getTime() + randomMinutes * 60 * 1000)

  // Format to full ISO string with milliseconds
  const formatTimestamp = (date: Date): string => {
    return date.toISOString()
  }

  const startedAtFormatted = formatTimestamp(startedAt)

  let finishedAt: string | undefined
  let abortedAt: string | undefined
  let updatedAt: string | undefined

  if (status === 'completed' || status === 'failed' || status === 'timeout') {
    const finishedAtDate = new Date(startedAt.getTime() + 60 * 60 * 1000) // +60 minutes
    finishedAt = formatTimestamp(finishedAtDate)
  }

  if (status === 'aborted') {
    const abortedAtDate = new Date(startedAt.getTime() + 15 * 60 * 1000) // +15 minutes
    abortedAt = formatTimestamp(abortedAtDate)
  }

  if (status === 'in progress') {
    const randomUpdateMinutes = Math.floor(Math.random() * 60) + 1
    const updatedAtDate = new Date(startedAt.getTime() + randomUpdateMinutes * 60 * 1000)
    updatedAt = formatTimestamp(updatedAtDate)
  }

  // Create the result object, omitting undefined values
  const result: Timestamps = {
    started_at: startedAtFormatted,
  }

  if (finishedAt) {
    result.finished_at = finishedAt
  }
  if (abortedAt) {
    result.aborted_at = abortedAt
  }
  if (updatedAt) {
    result.updated_at = updatedAt
  }

  return result
}
