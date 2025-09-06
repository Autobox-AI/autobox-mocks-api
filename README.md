# Autobox Mocks API

A serverless mock API deployed on Vercel that provides pre-generated test data for the Autobox multi-agent AI simulation platform.

## Overview

autobox-mocks-api serves as a development and testing backend by exposing all autobox-api endpoints with realistic mock data. It uses pre-generated static data to ensure consistent responses across environments, making it ideal for frontend development, testing, and demos.

## Features

- 🚀 Serverless deployment on Vercel
- 📊 Pre-generated mock data with LLM-powered content
- 🔒 Type-safe with TypeScript and Zod validation
- ⚡ Fast responses with static data serving
- 🔄 Automated mock generation and synchronization pipeline
- 🧪 Comprehensive test coverage

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn package manager
- OpenAI API key (for generating new mock data)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/autobox-mocks-api.git
cd autobox-mocks-api

# Install dependencies
yarn install
```

### Local Development

```bash
# Start Vercel dev server on port 9000
yarn start:vercel
```

## Mock Data Management

### Generate New Mock Data

```bash
# Set your OpenAI API key
export OPENAI_API_KEY=your-api-key

# Generate new mock data
yarn generate

# Or build and run the compiled generator
yarn generate:build
yarn generate:prod
```

### Sync Mock Data

The project uses a two-stage data pipeline:
1. JSON mock files in `mocks/` (generated)
2. TypeScript files in `src/mocks/` (synced from JSON)

```bash
# One-time sync from JSON to TypeScript
yarn sync:mocks

# Watch mode for automatic syncing during development
yarn sync:mocks:watch

# Generate and sync in one command
yarn generate:all

# Generate and sync with watch mode
yarn dev:mocks
```

## Project Structure

```
autobox-mocks-api/
├── api/                       # Vercel serverless functions
│   ├── index.ts              # Main API router
│   └── ping.ts               # Health check endpoint
├── mocks/                    # Generated JSON mock data
├── src/
│   ├── handler/             # Request handlers
│   ├── mocks/               # TypeScript mock data
│   └── utils/               # Utility functions
└── scripts/
    ├── generator/           # Mock data generation
    │   ├── generators/      # Entity generators
    │   ├── openai/         # LLM integration
    │   └── schemas/        # Zod schemas
    └── sync-mocks.ts       # JSON to TS sync
```

## API Endpoints

### Organizations
- `GET /api/organizations` - List all organizations
- `GET /api/organizations/[oid]` - Get organization by ID

### Projects
- `GET /api/organizations/[oid]/projects` - List projects for organization
- `GET /api/organizations/[oid]/projects/[pid]` - Get project by ID

### Simulations
- `GET /api/organizations/[oid]/projects/[pid]/simulations` - List simulations
- `GET /api/organizations/[oid]/projects/[pid]/simulations/[id]` - Get simulation

### Runs
- `GET /api/organizations/[oid]/projects/[pid]/simulations/[sid]/runs` - List runs
- `GET /api/organizations/[oid]/projects/[pid]/simulations/[sid]/runs/[id]` - Get run

### Agents
- `GET /api/.../runs/[rid]/agents` - List agents for run
- `GET /api/.../runs/[rid]/agents/[id]` - Get agent by ID

### Traces
- `GET /api/.../runs/[rid]/traces` - Get traces for run
- `GET /api/.../runs/[rid]/agents/[aid]/traces` - Get agent traces

### Metrics
- `GET /api/.../runs/[rid]/metrics` - Get run metrics
- `GET /api/.../simulations/[sid]/metrics/definitions` - Get metric definitions

### Other
- `GET /api/ping` - Health check
- `POST /api/organizations/[oid]/chat` - Chat endpoint

## Testing

```bash
# Run all tests
yarn test

# Run unit tests only
yarn test:unit

# Run integration tests
yarn test:integration

# Type checking
yarn check:types
```

## Development Workflow

### Adding New Endpoints

1. Create a handler in `src/handler/`:
```typescript
export function getNewEndpoint(req: VercelRequest, res: VercelResponse) {
  const data = mockData.newEndpoint;
  return res.status(200).json(data);
}
```

2. Add route to `api/index.ts`:
```typescript
const routes = {
  'GET:/api/new-endpoint': getNewEndpoint,
  // ...
};
```

3. Add mock data to generator or seeds

### Modifying Mock Data

1. Edit generator in `scripts/generator/generators/`
2. Run `yarn generate` to create new JSON
3. Run `yarn sync:mocks` to update TypeScript
4. Test with `yarn start:vercel`

## Deployment

The API is automatically deployed to Vercel on push to main branch.

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

## Data Model

The mock data follows this hierarchy:

```
Organizations (1) → (N) Projects
Projects (1) → (N) Simulations  
Simulations (1) → (N) Runs
Runs (1) → (N) Agents, Traces, Metrics
```

Each entity has realistic attributes generated using OpenAI GPT-4:
- Organizations: Tech companies with various focus areas
- Projects: AI/ML initiatives with business goals
- Simulations: Multi-agent scenarios for negotiation, planning, etc.
- Runs: Execution instances with timestamps and status
- Agents: Specialized AI agents with roles and objectives
- Traces: Conversation history and agent interactions
- Metrics: Performance and outcome measurements

## Configuration

### Environment Variables

```bash
# For mock generation
OPENAI_API_KEY=your-openai-api-key
OPENAI_MODEL=gpt-4-turbo-preview  # Optional, defaults to gpt-4

# For local development
PORT=9000  # Vercel dev server port
```

### Vercel Configuration

See `vercel.json` for deployment settings:
- Function timeout: 5 seconds
- All routes handled by single function
- GitHub integration enabled

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is part of the Autobox platform. See LICENSE for details.

## Related Projects

- [autobox-api](../autobox-api) - Backend API with agent orchestration
- [autobox-ui](../autobox-ui) - Frontend application
- [autobox-mocks](../autobox-mocks) - Python mock data generator

## Support

For issues, questions, or suggestions, please open an issue on GitHub.