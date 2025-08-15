# Mock Generator Performance Improvements

## Current Performance Analysis
- **55 simulations** generating **~165 runs** with **500+ OpenAI API calls**
- Main bottleneck: Sequential OpenAI API calls with 120-second timeout
- Current parallelization: Runs and metrics across simulations

## Recommended Improvements

### 1. **Implement API Call Batching & Rate Limiting**
- Install required dependency: `yarn add p-limit`
- Use `batchProcessor.ts` to control concurrent API calls (10-20 concurrent)
- Reduces API throttling and improves throughput

### 2. **Optimize Run Generation Pipeline**
- Use `runs-optimized.ts` for flattened parallelization
- Generate traces and prepare summary context in parallel
- Batch process runs in groups of 20-30

### 3. **Implement Smart Caching**
- Cache similar prompt responses to avoid duplicate API calls
- Use memory + disk cache with TTL
- Especially effective for metric definitions and similar simulations

### 4. **Model Optimization**
- Use `gpt-3.5-turbo` for traces (faster, cheaper)
- Keep `gpt-4o-mini` for summaries and metrics
- Reduces costs by ~40% and improves speed by ~2x for traces

### 5. **Reduce Timeouts**
- Decrease timeout from 120s to 60s
- Fail fast and retry rather than waiting
- Implement exponential backoff for retries

### 6. **File I/O Optimization**
- Already parallelized ✓
- Consider streaming large JSON files if they grow

## Performance Gains Expected

### With ALL optimizations:
- **~3-4x faster** generation time
- **~40% cost reduction** (using smaller models for traces)
- **Better reliability** with controlled concurrency

### Quick Wins (implement first):
1. **API Batching** (batchProcessor.ts) - 2x speedup
2. **Reduce timeout** to 60s - 20% speedup on failures
3. **Use smaller model for traces** - 40% cost reduction

## Implementation Steps

1. Install dependencies:
   ```bash
   yarn add p-limit
   ```

2. Update main.ts to use optimized generators:
   ```typescript
   import { generateRunsOptimized } from './generators/runs-optimized'
   // Replace generateRuns with generateRunsOptimized
   ```

3. Set environment variables for tuning:
   ```bash
   OPENAI_MAX_CONCURRENT=15
   OPENAI_TIMEOUT=60000
   USE_SMALL_MODEL_FOR_TRACES=true
   TRACES_MODEL=gpt-3.5-turbo
   CACHE_ENABLED=true
   ```

4. Use performance presets:
   ```typescript
   import { loadPreset } from './config/performance'
   loadPreset('fast') // or 'balanced' or 'quality'
   ```

## Monitoring

Add timing logs to track improvements:
```typescript
console.time('Total Generation')
console.time('Runs Generation')
console.time('Metrics Generation')
// ... generation code
console.timeEnd('Runs Generation')
console.timeEnd('Metrics Generation')
console.timeEnd('Total Generation')
```

## Additional Considerations

### If still too slow:
1. **Pre-generate templates** - Create trace templates offline
2. **Use OpenAI Batch API** - 50% cost reduction, but 24-hour turnaround
3. **Implement progressive generation** - Generate in stages
4. **Consider local LLMs** for non-critical content (traces)

### For production:
1. Implement proper error handling and retries
2. Add progress reporting (websocket/SSE)
3. Support resume from failure
4. Add generation job queue (BullMQ)