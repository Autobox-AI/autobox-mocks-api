# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

autobox-mocks-api is a serverless mock API deployed on Vercel that provides pre-generated test data for the Autobox multi-agent AI simulation platform. It serves as a development and testing backend by exposing all autobox-api endpoints with realistic mock data.

## Common Development Commands

### Mock Data Management
```bash
# Generate new mock data (requires OpenAI API key)
yarn generate                    # Run TypeScript mock generator
yarn generate:build              # Build generator to JavaScript
yarn generate:prod               # Run compiled JavaScript generator

# Sync mock data from JSON to TypeScript
yarn sync:mocks                  # One-time sync of JSON mocks to TS files
yarn sync:mocks:watch           # Watch mode for automatic syncing
yarn generate:all              # Generate mocks then sync (one-time)
yarn dev:mocks                 # Generate mocks then sync with watch mode
```

### Development & Testing
```bash
# Type checking
yarn check:types                # TypeScript type checking

# Testing
yarn test                       # Run all tests (unit + integration)
yarn test:unit                  # Run unit tests only
yarn test:integration           # Run integration tests only

# Local development with Vercel
yarn start:vercel              # Start Vercel dev server on port 9000
```

## High-Level Architecture

### Project Structure
```
autobox-mocks-api/
├── api/                       # Vercel serverless function entry points
│   ├── index.ts              # Main API router handling all endpoints
│   └── ping.ts               # Health check endpoint
├── mocks/                    # JSON mock data (generated)
│   ├── organizations.json
│   ├── projects.json
│   ├── simulations.json
│   ├── runs.json
│   ├── traces.json
│   ├── bookmarks.json
│   ├── metric_definitions_by_simulation_id.json
│   └── metric_values_by_run.json
├── src/
│   ├── handler/             # Request handlers for each endpoint
│   ├── mocks/               # TypeScript mock data (synced from JSON)
│   └── utils/               # Utility functions
└── scripts/
    ├── generator/           # Mock data generation pipeline
    │   ├── generators/      # Data generators for each entity type
    │   ├── openai/         # LLM integration for content generation
    │   ├── schemas/        # Zod schemas for data validation
    │   └── seeds/          # Static seed data
    ├── sync-mocks.ts       # JSON to TypeScript synchronization
    └── sync-mocks-advanced.ts  # Advanced sync with watch mode
```

### Data Flow

1. **Mock Generation Pipeline**:
   ```
   seeds/ → DataGenerator → OpenAI API → JSON files (mocks/)
   ```
   - Static seed data (organizations, projects, simulations) in `scripts/generator/seeds/`
   - `DataGenerator` orchestrates async generation with LLM-powered content
   - Output saved to `mocks/` directory as JSON files

2. **TypeScript Synchronization**:
   ```
   JSON files (mocks/) → sync-mocks → TypeScript files (src/mocks/)
   ```
   - `sync-mocks.ts` reads JSON and generates typed TypeScript exports
   - Maintains type safety with `as const` assertions
   - Watch mode available for development

3. **API Request Handling**:
   ```
   Vercel Request → api/index.ts → route matcher → handler → mock data → Response
   ```
   - Single serverless function handles all routes via pattern matching
   - Handlers in `src/handler/` import typed mock data from `src/mocks/`
   - Returns pre-generated static data for consistent testing

### Key Technical Details

**Serverless Configuration (vercel.json)**:
- All `/api/*` routes rewrite to `/api/index.ts`
- 5-second max function duration
- GitHub integration enabled

**Route Pattern Matching**:
- Dynamic segments: `[oid]`, `[pid]`, `[id]` for IDs
- Supports GET, POST, DELETE methods
- Routes defined in `api/index.ts` routes object

**Mock Data Relationships**:
```
Organizations (1) → (N) Projects
Projects (1) → (N) Simulations  
Simulations (1) → (N) Runs
Runs (1) → (N) Agents, Traces, Metrics
```

**TypeScript Configuration**:
- Target: ES2020
- Strict mode enabled
- Module resolution: Node
- Source maps enabled for debugging

## Development Workflow

1. **Modifying Mock Data**:
   - Edit generator code in `scripts/generator/`
   - Run `yarn generate` to create new JSON mocks
   - Run `yarn sync:mocks` to update TypeScript files
   - Or use `yarn generate:all` for both steps

2. **Adding New Endpoints**:
   - Create handler in `src/handler/`
   - Add route definition to `api/index.ts` routes object
   - Import and use mock data from `src/mocks/`

3. **Testing Changes**:
   - Use `yarn start:vercel` for local Vercel environment
   - Run `yarn test` to ensure all tests pass
   - Check types with `yarn check:types`

## Important Patterns

1. **Mock Data Consistency**: All mock data is pre-generated to ensure consistent responses across environments
2. **Type Safety**: JSON mocks are converted to TypeScript with `as const` for full type inference
3. **Serverless Architecture**: Single function handles all routes to minimize cold starts
4. **Async Generation**: Mock generation uses concurrent processing with LLM rate limiting
5. **Validation**: Zod schemas validate all generated data structure