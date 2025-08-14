import dotenv from 'dotenv'

dotenv.config()

export const settings = {
  organizationId: process.env.ORG_ID || '9d2a8ba7-4d4c-4dc4-a07e-121b0bc92de4',
  mocksPath: './mocks',
  openai: {
    apiKey: process.env.OPENAI_API_KEY || '',
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
  },
} as const
