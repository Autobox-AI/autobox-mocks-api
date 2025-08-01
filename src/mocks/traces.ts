export const traces = [
  {
    id: 'trace-run-001-001',
    runId: 'run-001',
    agentId: 'agent-001-orchestrator',
    message: 'Simulation started with 4 agents',
    timestamp: '2025-01-15T10:00:00.000Z',
    level: 'info',
    context: {
      simulation_id: 'sim-001',
      agent_count: 4,
      phase: 'initialization'
    }
  },
  {
    id: 'trace-run-001-002',
    runId: 'run-001',
    agentId: 'agent-002-planner',
    message: 'Strategic planning phase initiated',
    timestamp: '2025-01-15T10:05:00.000Z',
    level: 'info',
    context: {
      simulation_id: 'sim-001',
      phase: 'planning',
      objectives: ['consensus_building', 'conflict_resolution']
    }
  },
  {
    id: 'trace-run-001-003',
    runId: 'run-001',
    agentId: 'agent-003-evaluator',
    message: 'Performance metrics collection started',
    timestamp: '2025-01-15T10:10:00.000Z',
    level: 'info',
    context: {
      simulation_id: 'sim-001',
      phase: 'evaluation',
      metrics_tracked: ['decision_time', 'consensus_rate', 'satisfaction_score']
    }
  },
  {
    id: 'trace-run-001-004',
    runId: 'run-001',
    agentId: 'agent-004-reporter',
    message: 'Final report generation completed',
    timestamp: '2025-01-15T10:40:00.000Z',
    level: 'success',
    context: {
      simulation_id: 'sim-001',
      phase: 'reporting',
      report_sections: ['summary', 'metrics_analysis', 'recommendations']
    }
  },
  {
    id: 'trace-run-002-001',
    runId: 'run-002',
    agentId: 'agent-005-coordinator',
    message: 'Gym buddy simulation initialized',
    timestamp: '2025-01-15T11:00:00.000Z',
    level: 'info',
    context: {
      simulation_id: 'sim-002',
      scenario: 'gym_buddy_motivation',
      participants: 2
    }
  }
]