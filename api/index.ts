import { VercelRequest, VercelResponse } from '@vercel/node'
import {
  deleteBookmark,
  getBookmarkId,
  getBookmarks,
  getMetricTemplates,
  getOrganizationId,
  getOrganizations,
  getOrganizationSimulations,
  getProjectById,
  getProjects,
  getRunAgentById,
  getRunAgents,
  getRunAgentTraces,
  getRunById,
  getRunMetrics,
  getRuns,
  getRunTraces,
  getSimulationById,
  getSimulations,
  postBookmarks,
  postChat,
  postMetricTemplates,
  postProjects,
  postRuns,
  postSimulations,
  updateRunAgent,
} from '../src'

interface RouteHandler {
  handler: (req: VercelRequest, res: VercelResponse) => VercelResponse | void | Promise<void>
  methods: string[]
}

const routes: Record<string, RouteHandler> = {
  ping: {
    handler: (req, res) => res.status(200).send('pong'),
    methods: ['GET'],
  },

  organizations: {
    handler: getOrganizations,
    methods: ['GET'],
  },
  'organizations/[oid]': {
    handler: getOrganizationId,
    methods: ['GET'],
  },
  'organizations/[oid]/simulations': {
    handler: getOrganizationSimulations,
    methods: ['GET'],
  },

  'organizations/[oid]/bookmarks': {
    handler: (req, res) => {
      if (req.method === 'GET') return getBookmarks(req, res)
      if (req.method === 'POST') return postBookmarks(req, res)
    },
    methods: ['GET', 'POST'],
  },
  'organizations/[oid]/bookmarks/[id]': {
    handler: (req, res) => {
      if (req.method === 'GET') return getBookmarkId(req, res)
      if (req.method === 'DELETE') return deleteBookmark(req, res)
    },
    methods: ['GET', 'DELETE'],
  },

  'organizations/[oid]/projects': {
    handler: (req, res) => {
      if (req.method === 'GET') return getProjects(req, res)
      if (req.method === 'POST') return postProjects(req, res)
    },
    methods: ['GET', 'POST'],
  },
  'projects/[pid]': {
    handler: getProjectById,
    methods: ['GET'],
  },

  'projects/[pid]/simulations': {
    handler: (req, res) => {
      if (req.method === 'GET') return getSimulations(req, res)
      if (req.method === 'POST') return postSimulations(req, res)
    },
    methods: ['GET', 'POST'],
  },
  'simulations/[id]': {
    handler: getSimulationById,
    methods: ['GET'],
  },

  'simulations/[id]/runs': {
    handler: (req, res) => {
      if (req.method === 'GET') return getRuns(req, res)
      if (req.method === 'POST') return postRuns(req, res)
    },
    methods: ['GET', 'POST'],
  },
  'runs/[rid]': {
    handler: getRunById,
    methods: ['GET'],
  },
  'runs/[rid]/traces': {
    handler: getRunTraces,
    methods: ['GET'],
  },
  'runs/[rid]/metrics': {
    handler: getRunMetrics,
    methods: ['GET'],
  },

  'runs/[rid]/agents': {
    handler: getRunAgents,
    methods: ['GET'],
  },
  'runs/[rid]/agents/[agentId]': {
    handler: (req, res) => {
      if (req.method === 'GET') return getRunAgentById(req, res)
      if (req.method === 'PUT') return updateRunAgent(req, res)
    },
    methods: ['GET', 'PUT'],
  },
  'runs/[rid]/agents/[agentId]/traces': {
    handler: getRunAgentTraces,
    methods: ['GET'],
  },

  'templates/metrics': {
    handler: (req, res) => {
      if (req.method === 'GET') return getMetricTemplates(req, res)
      if (req.method === 'POST') return postMetricTemplates(req, res)
    },
    methods: ['GET', 'POST'],
  },

  chat: {
    handler: postChat,
    methods: ['POST', 'OPTIONS'],
  },
}

function matchRoute(path: string): { route: string; params: Record<string, string> } | null {
  const pathSegments = path.split('/').filter(Boolean)

  for (const [routePattern, _] of Object.entries(routes)) {
    const routeSegments = routePattern.split('/').filter(Boolean)

    if (pathSegments.length !== routeSegments.length) continue

    const params: Record<string, string> = {}
    let isMatch = true

    for (let i = 0; i < routeSegments.length; i++) {
      const routeSegment = routeSegments[i]
      const pathSegment = pathSegments[i]

      if (routeSegment.startsWith('[') && routeSegment.endsWith(']')) {
        const paramName = routeSegment.slice(1, -1)
        params[paramName] = pathSegment
      } else if (routeSegment !== pathSegment) {
        isMatch = false
        break
      }
    }

    if (isMatch) {
      return { route: routePattern, params }
    }
  }

  return null
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const url = req.url || ''
    const [pathname] = url.split('?')
    const path = pathname.replace(/^\/api\//, '')

    const match = matchRoute(path)

    if (!match) {
      return res.status(404).json({ error: 'Route not found' })
    }

    const { route, params } = match
    const routeHandler = routes[route]

    if (!routeHandler.methods.includes(req.method || 'GET')) {
      res.setHeader('Allow', routeHandler.methods)
      return res.status(405).json({ error: `Method ${req.method} Not Allowed` })
    }

    req.query = { ...req.query, ...params }

    await routeHandler.handler(req, res)
  } catch (error) {
    console.error('Handler error:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
