# Autobox Mock Generator

TypeScript-based mock data generator for the Autobox API system. This package generates synthetic data including organizations, projects, simulations, runs, traces, and metrics.

## Architecture

```
generator/
├── config/         # Configuration and settings
├── db/             # Database clients (Redis, InfluxDB)
├── generators/     # Data generation logic
├── mocks/          # Static mock data
├── prompts/        # LLM prompts (to be implemented)
├── schemas/        # Zod schemas for data validation
├── services/       # API client and data loader
└── utils/          # Utility functions
```

## Usage

### Development Mode

```bash
# Generate mock data with hot reload
yarn generate

# Set environment variables
export USE_MOCKS=false  # Generate fresh data
export CLEAN_DB=true       # Clean Redis before running
export AUTOBOX_API_PORT=8080
export OPENAI_API_KEY=your-key-here
```

### Production Mode

```bash
# Build the generator
yarn generate:build

# Run the compiled version
yarn generate:prod
```

## Configuration

Edit `src/generator/config/settings.ts` or use environment variables:

- `USE_MOCKS`: Use cached data from mocks directory
- `CLEAN_DB`: Flush Redis before generating data
- `AUTOBOX_API_PORT`: Port of the Autobox API
- `AUTOBOX_API_ENDPOINT`: Full endpoint URL
- `REDIS_HOST`: Redis host (default: localhost)
- `REDIS_PORT`: Redis port (default: 6379)
- `INFLUXDB_URL`: InfluxDB URL (default: <http://localhost:8086>)
- `OPENAI_API_KEY`: OpenAI API key for LLM generation

## Data Flow

1. **Load/Generate Data**: Either loads from mocks or generates fresh data
2. **Mock Data**: Static organizations, projects, and simulations
3. **LLM Generation**: Metric definitions and values, runs with traces (TODO)
4. **API Integration**: Creates data via Autobox API endpoints
5. **Caching**: Saves to Redis and optionally to InfluxDB
6. **Mocks**: Saves generated data for future use

## Migration from Python

This generator is a TypeScript migration of the original Python mock generator with the following improvements:

- **Type Safety**: Full TypeScript with Zod schemas
- **Unified Stack**: Same technology as autobox-api and autobox-ui
- **Better Integration**: Reuses types and schemas from main API
- **Performance**: Leverages Node.js async/await patterns

## TODO

- [ ] Implement LLM integration for dynamic content generation
- [ ] Migrate prompts from Python version
- [ ] Add comprehensive error handling
- [ ] Implement progress tracking
- [ ] Add configuration validation
- [ ] Create unit tests for generators
