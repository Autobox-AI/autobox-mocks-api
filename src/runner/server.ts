import dotenv from 'dotenv'

dotenv.config()

import { VercelRequest, VercelResponse } from '@vercel/node'
import express from 'express'
import getOrganizations from '../api/organizations'
import bookmarksHandler from '../api/organizations/[oid]/bookmarks'
import bookmarksIdHandler from '../api/organizations/[oid]/bookmarks/[id]'
import ping from '../api/ping'
import { PORT_DEV_SERVER } from '../config/constants'

const app = express()

app.use(express.json())

const handlerWrapper = (handler: (req: VercelRequest, res: VercelResponse) => void) => {
  return (req: express.Request, res: express.Response) => {
    const vercelReq = req as VercelRequest
    const vercelRes = res as unknown as VercelResponse
    handler(vercelReq, vercelRes)
  }
}

app.get('/organizations', handlerWrapper(getOrganizations))
app.get('/bookmarks', handlerWrapper(bookmarksHandler))
app.get('/bookmarks/:id', handlerWrapper(bookmarksIdHandler))
app.get('/ping', handlerWrapper(ping))

app.listen(PORT_DEV_SERVER, () => {
  const isLocal = process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === undefined
  const host = isLocal ? 'localhost' : '0.0.0.0'
  console.log(`Server is running on http://${host}:${PORT_DEV_SERVER}`)
})
