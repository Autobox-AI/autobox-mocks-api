import dotenv from 'dotenv'

dotenv.config()

import { VercelRequest, VercelResponse } from '@vercel/node'
import bookmarksHandler from 'api/bookmarks'
import bookmarksIdHandler from 'api/bookmarks/[id]'
import getOrganizations from 'api/organizations'
import ping from 'api/ping'
import express from 'express'
import { PORT_DEV_SERVER } from '../config/constants'
// import { getBookmarks } from 'src'

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
  console.log(`Server is running on http://localhost:${PORT_DEV_SERVER}`)
})
