import OpenAI from 'openai'
import { zodResponseFormat } from 'openai/helpers/zod'
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions'
import { Schema, z } from 'zod'
import { settings } from '../config/settings'

export const DEFAULT_OPEN_AI_TIMEOUT_MS = 120 * 1000 // 120 seconds

const openAiClient = new OpenAI({
  apiKey: settings.openai.apiKey,
  maxRetries: 4,
  timeout: DEFAULT_OPEN_AI_TIMEOUT_MS,
})

export const createChatCompletion = async (messages: ChatCompletionMessageParam[]) => {
  const completion = await openAiClient.chat.completions.create({
    model: settings.openai.model,
    messages,
  })
  return completion.choices[0].message.content
}

export const createParsedChatCompletion = async <T extends Schema>(
  messages: ChatCompletionMessageParam[],
  schema: T
): Promise<z.infer<T>> => {
  const completion = await openAiClient.chat.completions.parse({
    messages,
    model: settings.openai.model,
    response_format: zodResponseFormat(schema, 'output'),
  })
  return completion.choices[0].message.parsed as z.infer<T>
}
