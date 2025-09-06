export const performanceConfig = {
  openai: {
    maxConcurrentCalls: parseInt(process.env.OPENAI_MAX_CONCURRENT || '10'),
    retryDelay: parseInt(process.env.OPENAI_RETRY_DELAY || '1000'),
    maxRetries: parseInt(process.env.OPENAI_MAX_RETRIES || '3'),
    timeout: parseInt(process.env.OPENAI_TIMEOUT || '60000'),
  },
  
  batching: {
    runsBatchSize: parseInt(process.env.RUNS_BATCH_SIZE || '20'),
    metricsBatchSize: parseInt(process.env.METRICS_BATCH_SIZE || '30'),
    tracesParallel: process.env.TRACES_PARALLEL === 'true',
  },
  
  cache: {
    enabled: process.env.CACHE_ENABLED !== 'false',
    ttl: parseInt(process.env.CACHE_TTL || '3600000'),
    similarPromptDetection: process.env.SIMILAR_PROMPT_DETECTION === 'true',
  },
  
  model: {
    useSmallModelForTraces: process.env.USE_SMALL_MODEL_FOR_TRACES === 'true',
    tracesModel: process.env.TRACES_MODEL || 'gpt-3.5-turbo',
    summaryModel: process.env.SUMMARY_MODEL || 'gpt-4o-mini',
  },
  
  generation: {
    maxRunsPerSimulation: parseInt(process.env.MAX_RUNS_PER_SIM || '5'),
    skipEmptyRuns: process.env.SKIP_EMPTY_RUNS === 'true',
    parallelSimulations: process.env.PARALLEL_SIMULATIONS === 'true',
  }
}

export const presets = {
  fast: {
    openai: { maxConcurrentCalls: 20, timeout: 30000 },
    batching: { runsBatchSize: 30, tracesParallel: true },
    model: { useSmallModelForTraces: true },
    generation: { maxRunsPerSimulation: 3, skipEmptyRuns: true }
  },
  balanced: {
    openai: { maxConcurrentCalls: 10, timeout: 60000 },
    batching: { runsBatchSize: 20, tracesParallel: true },
    model: { useSmallModelForTraces: false },
    generation: { maxRunsPerSimulation: 5, skipEmptyRuns: false }
  },
  quality: {
    openai: { maxConcurrentCalls: 5, timeout: 120000 },
    batching: { runsBatchSize: 10, tracesParallel: false },
    model: { useSmallModelForTraces: false },
    generation: { maxRunsPerSimulation: 5, skipEmptyRuns: false }
  }
}

export function loadPreset(presetName: 'fast' | 'balanced' | 'quality') {
  const preset = presets[presetName]
  Object.assign(performanceConfig, preset)
}