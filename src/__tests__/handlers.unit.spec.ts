import { VercelRequest, VercelResponse } from '@vercel/node'
import {
  getOrganizations,
  getOrganizationId,
  getProjects,
  getProjectById,
  getSimulations,
  getSimulationById,
  getRuns,
  getRunById,
  getRunAgents,
  getRunAgentById,
  getRunTraces,
  getRunAgentTraces,
  getRunMetrics,
  getBookmarks,
  getBookmarkId,
  getMetricTemplates,
} from '../handler'

const createMockRequest = (params: any = {}, query: any = {}): VercelRequest =>
  ({
    query: { ...params, ...query },
    method: 'GET',
  } as VercelRequest)

const createMockResponse = (): VercelResponse => {
  const res = {} as VercelResponse
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  return res
}

describe('Handler Unit Tests', () => {
  let mockRequest: VercelRequest
  let mockResponse: VercelResponse

  beforeEach(() => {
    mockResponse = createMockResponse()
  })

  describe('getOrganizations', () => {
    it('should return all organizations with 200 status', () => {
      mockRequest = createMockRequest()
      
      getOrganizations(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(200)
      expect(mockResponse.json).toHaveBeenCalled()
    })
  })

  describe('getOrganizationId', () => {
    it('should return specific organization when found', () => {
      mockRequest = createMockRequest({ organizationId: '9d2a8ba7-4d4c-4dc4-a07e-121b0bc92de8' })
      
      getOrganizationId(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(200)
      expect(mockResponse.json).toHaveBeenCalled()
    })

    it('should return 404 when organization not found', () => {
      mockRequest = createMockRequest({ organizationId: 'invalid-id' })
      
      getOrganizationId(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(404)
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Organization not found' })
    })
  })

  describe('getProjects', () => {
    it('should return projects with 200 status', () => {
      mockRequest = createMockRequest({ organization_id: '9d2a8ba7-4d4c-4dc4-a07e-121b0bc92de4' })
      
      getProjects(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(200)
      expect(mockResponse.json).toHaveBeenCalled()
    })

    it('should handle empty organization filter', () => {
      mockRequest = createMockRequest({ organization_id: 'non-existent-org' })
      
      getProjects(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(200)
      expect(mockResponse.json).toHaveBeenCalled()
    })
  })

  describe('getProjectById', () => {
    it('should return specific project when found', () => {
      mockRequest = createMockRequest({ pid: '13435e21-c9fd-4547-8f35-d06d39deabdc' })
      
      getProjectById(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(200)
      expect(mockResponse.json).toHaveBeenCalled()
    })

    it('should return 404 when project not found', () => {
      mockRequest = createMockRequest({ pid: 'invalid-id' })
      
      getProjectById(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(404)
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Project not found' })
    })
  })

  describe('getSimulations', () => {
    it('should return all simulations when no project ID provided', () => {
      mockRequest = createMockRequest()
      
      getSimulations(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(200)
      expect(mockResponse.json).toHaveBeenCalled()
    })

    it('should return filtered simulations for specific project', () => {
      mockRequest = createMockRequest({ pid: '13435e21-c9fd-4547-8f35-d06d39deabdc' })
      
      getSimulations(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(200)
      expect(mockResponse.json).toHaveBeenCalled()
    })

    it('should return empty array for non-existent project', () => {
      mockRequest = createMockRequest({ pid: 'non-existent-project' })
      
      getSimulations(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(200)
      expect(mockResponse.json).toHaveBeenCalled()
    })
  })

  describe('getSimulationById', () => {
    it('should return specific simulation when found', () => {
      mockRequest = createMockRequest({ id: '43419666-8307-4afa-96be-32400e855cc4' })
      
      getSimulationById(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(200)
      expect(mockResponse.json).toHaveBeenCalled()
    })

    it('should return 404 when simulation not found', () => {
      mockRequest = createMockRequest({ id: 'invalid-id' })
      
      getSimulationById(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(404)
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Simulation not found' })
    })
  })

  describe('getRuns', () => {
    it('should return runs with 200 status', () => {
      mockRequest = createMockRequest({ simulation_id: '43419666-8307-4afa-96be-32400e855cc4' })
      
      getRuns(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(200)
      expect(mockResponse.json).toHaveBeenCalled()
    })
  })

  describe('getRunById', () => {
    it('should return specific run when found', () => {
      mockRequest = createMockRequest({ rid: 'cdfc1b8b-6a46-43c1-8bb9-6bd433c3eba6' })
      
      getRunById(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(200)
      expect(mockResponse.json).toHaveBeenCalled()
    })

    it('should return 404 when run not found', () => {
      mockRequest = createMockRequest({ rid: 'invalid-id' })
      
      getRunById(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(404)
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Run not found' })
    })
  })

  describe('getRunAgents', () => {
    it('should return agents with 200 status', () => {
      mockRequest = createMockRequest({ rid: 'cdfc1b8b-6a46-43c1-8bb9-6bd433c3eba6' })
      
      getRunAgents(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(200)
      expect(mockResponse.json).toHaveBeenCalled()
    })
  })

  describe('getRunAgentById', () => {
    it('should return specific agent when found', () => {
      mockRequest = createMockRequest({ rid: 'cdfc1b8b-6a46-43c1-8bb9-6bd433c3eba6', agentId: '0b3b27f4-a053-439a-8643-63e080258845' })
      
      getRunAgentById(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(200)
      expect(mockResponse.json).toHaveBeenCalled()
    })

    it('should return 404 when agent not found', () => {
      mockRequest = createMockRequest({ rid: 'cdfc1b8b-6a46-43c1-8bb9-6bd433c3eba6', agentId: 'invalid-agent' })
      
      getRunAgentById(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(404)
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Agent not found' })
    })
  })

  describe('getRunTraces', () => {
    it('should return traces with 200 status', () => {
      mockRequest = createMockRequest({ rid: 'cdfc1b8b-6a46-43c1-8bb9-6bd433c3eba6' })
      
      getRunTraces(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(200)
      expect(mockResponse.json).toHaveBeenCalled()
    })
  })

  describe('getRunAgentTraces', () => {
    it('should return agent traces with 200 status', () => {
      mockRequest = createMockRequest({ rid: 'cdfc1b8b-6a46-43c1-8bb9-6bd433c3eba6', agentId: 'Sarah' })
      
      getRunAgentTraces(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(200)
      expect(mockResponse.json).toHaveBeenCalled()
    })
  })

  describe('getRunMetrics', () => {
    it('should return metrics with 200 status', () => {
      mockRequest = createMockRequest({ rid: 'cdfc1b8b-6a46-43c1-8bb9-6bd433c3eba6' })
      
      getRunMetrics(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(200)
      expect(mockResponse.json).toHaveBeenCalled()
    })
  })

  describe('getBookmarks', () => {
    it('should return bookmarks with 200 status', () => {
      mockRequest = createMockRequest({ organizationId: '9d2a8ba7-4d4c-4dc4-a07e-121b0bc92de4' })
      
      getBookmarks(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(200)
      expect(mockResponse.json).toHaveBeenCalled()
    })
  })

  describe('getBookmarkId', () => {
    it('should return specific bookmark when found', () => {
      mockRequest = createMockRequest({ 
        organizationId: '9d2a8ba7-4d4c-4dc4-a07e-121b0bc92de4', 
        id: '724e77fd-83b7-4245-abed-4dae50b6488f' 
      })
      
      getBookmarkId(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(200)
      expect(mockResponse.json).toHaveBeenCalled()
    })

    it('should return 404 when bookmark not found', () => {
      mockRequest = createMockRequest({ 
        organizationId: '9d2a8ba7-4d4c-4dc4-a07e-121b0bc92de4', 
        id: 'invalid-id' 
      })
      
      getBookmarkId(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(404)
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Bookmark not found' })
    })
  })

  describe('getMetricTemplates', () => {
    it('should return all metric templates with 200 status', () => {
      mockRequest = createMockRequest()
      
      getMetricTemplates(mockRequest, mockResponse)
      
      expect(mockResponse.status).toHaveBeenCalledWith(200)
      expect(mockResponse.json).toHaveBeenCalled()
    })
  })
})