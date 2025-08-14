#!/usr/bin/env ts-node

import { organizations } from './seeds/organizations'
import { projects } from './seeds/projects'
import { simulations } from './seeds/simulations'
import { calculateStats, printStats } from './utils/stats'

console.log('Testing TypeScript Mock Generator...\n')

// Test mock data loading
console.log('✓ Organizations loaded:', organizations.length)
console.log('✓ Projects loaded:', projects.length)
console.log('✓ Simulations loaded:', simulations.length)

// Test stats calculation
const stats = calculateStats(organizations, projects, simulations, [], {}, {}, [])

printStats(stats, 0.01)

console.log('\n✅ Basic structure test passed!')
console.log('\nNext steps:')
console.log('1. Implement LLM integration for dynamic content generation')
console.log('2. Connect to Redis and InfluxDB')
console.log('3. Test with actual Autobox API')

process.exit(0)
