import pLimit from 'p-limit'
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions'
import { z, Schema } from 'zod'
import { createChatCompletion, createParsedChatCompletion } from './createChatCompletion'

const CONCURRENT_API_CALLS = 10 // Increase from default sequential processing
const apiLimit = pLimit(CONCURRENT_API_CALLS)

export const batchCreateChatCompletion = async (
  messages: ChatCompletionMessageParam[]
): Promise<string | null> => {
  return apiLimit(() => createChatCompletion(messages))
}

export const batchCreateParsedChatCompletion = async <T extends Schema>(
  messages: ChatCompletionMessageParam[],
  schema: T
): Promise<z.infer<T>> => {
  return apiLimit(() => createParsedChatCompletion(messages, schema))
}

export const processBatch = async <T>(
  items: T[],
  processor: (item: T) => Promise<any>,
  batchSize = 10
): Promise<any[]> => {
  const results: any[] = []
  
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize)
    const batchResults = await Promise.all(
      batch.map(item => processor(item))
    )
    results.push(...batchResults)
    
    if (i + batchSize < items.length) {
      await new Promise(resolve => setTimeout(resolve, 100))
    }
  }
  
  return results
}