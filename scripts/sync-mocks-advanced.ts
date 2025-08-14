#!/usr/bin/env tsx

import { promises as fs, watch } from 'fs'
import path from 'path'
import { parseArgs } from 'util'

const MOCKS_JSON_DIR = path.join(__dirname, '..', 'mocks')
const MOCKS_TS_DIR = path.join(__dirname, '..', 'src', 'mocks')

interface FileMapping {
  jsonFile: string
  tsFile: string
  exportName: string
  typeImport?: string
  transform?: (data: any) => any
}

const FILE_MAPPINGS: FileMapping[] = [
  {
    jsonFile: 'metric_definitions_by_simulation_id.json',
    tsFile: 'metricDefinitions.ts',
    exportName: 'metricDefinitionsBySimulationId',
    typeImport: "import type { MetricDefinition } from '../types'",
  },
  {
    jsonFile: 'metric_values_by_run.json',
    tsFile: 'metricValues.ts',
    exportName: 'metricValuesByRun',
    typeImport: "import type { MetricValue } from '../types'",
  },
  {
    jsonFile: 'bookmarks.json',
    tsFile: 'bookmarks.ts',
    exportName: 'bookmarks',
    typeImport: "import type { Bookmark } from '../types'",
  },
  {
    jsonFile: 'simulations.json',
    tsFile: 'simulations.ts',
    exportName: 'simulations',
    typeImport: "import type { Simulation } from '../types'",
  },
  {
    jsonFile: 'runs.json',
    tsFile: 'runs.ts',
    exportName: 'runs',
    typeImport: "import type { Run } from '../types'",
  },
  {
    jsonFile: 'traces.json',
    tsFile: 'traces.ts',
    exportName: 'tracesByRunId',
    typeImport: "import type { Trace } from '../types'",
  },
]

async function readJsonFile(filePath: string): Promise<any> {
  try {
    const content = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(content)
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error)
    throw error
  }
}

async function writeTypeScriptFile(
  filePath: string,
  exportName: string,
  data: any,
  typeImport?: string
): Promise<void> {
  // Format the data with proper indentation
  const formattedData = JSON.stringify(data, null, 2)
    .split('\n')
    .map((line, index) => (index === 0 ? line : line))
    .join('\n')

  // Build the content
  let content = ''
  
  // Add type import if provided
  if (typeImport) {
    content += `${typeImport}\n\n`
  }
  
  // Add the export statement
  content += `export const ${exportName} = ${formattedData} as const\n`
  
  // Add type export for better type inference
  content += `\nexport type ${capitalizeFirst(exportName)}Type = typeof ${exportName}\n`
  
  try {
    await fs.writeFile(filePath, content)
    console.log(`✓ Synced ${exportName} to ${path.basename(filePath)}`)
  } catch (error) {
    console.error(`Error writing ${filePath}:`, error)
    throw error
  }
}

function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

async function syncSingleFile(mapping: FileMapping): Promise<boolean> {
  const jsonPath = path.join(MOCKS_JSON_DIR, mapping.jsonFile)
  const tsPath = path.join(MOCKS_TS_DIR, mapping.tsFile)

  try {
    // Check if JSON file exists
    await fs.access(jsonPath)
    
    // Read JSON data
    let data = await readJsonFile(jsonPath)
    
    // Apply transformation if provided
    if (mapping.transform) {
      data = mapping.transform(data)
    }
    
    // Write TypeScript file
    await writeTypeScriptFile(tsPath, mapping.exportName, data, mapping.typeImport)
    return true
  } catch (error) {
    if ((error as any).code === 'ENOENT') {
      console.warn(`⚠ ${mapping.jsonFile} not found, skipping...`)
    } else {
      console.error(`✗ Failed to sync ${mapping.jsonFile}:`, error)
    }
    return false
  }
}

async function syncAllMocks(): Promise<void> {
  console.log('Starting mock synchronization...\n')
  
  let successCount = 0
  let totalCount = FILE_MAPPINGS.length

  for (const mapping of FILE_MAPPINGS) {
    const success = await syncSingleFile(mapping)
    if (success) successCount++
  }

  console.log(`\n✓ Mock synchronization completed! (${successCount}/${totalCount} files synced)`)
}

function watchMocks(): void {
  console.log('Starting mock file watcher...\n')
  console.log('Watching for changes in:', MOCKS_JSON_DIR)
  console.log('Press Ctrl+C to stop\n')

  // Initial sync
  syncAllMocks()

  // Set up file watchers for each JSON file
  FILE_MAPPINGS.forEach((mapping) => {
    const jsonPath = path.join(MOCKS_JSON_DIR, mapping.jsonFile)
    
    try {
      watch(jsonPath, async (eventType) => {
        if (eventType === 'change') {
          console.log(`\n📝 Detected change in ${mapping.jsonFile}`)
          await syncSingleFile(mapping)
        }
      })
    } catch (error) {
      console.warn(`Could not watch ${mapping.jsonFile}:`, error)
    }
  })
}

async function main() {
  // Parse command line arguments
  const { values } = parseArgs({
    args: process.argv.slice(2),
    options: {
      watch: {
        type: 'boolean',
        short: 'w',
        default: false,
      },
      help: {
        type: 'boolean',
        short: 'h',
        default: false,
      },
    },
  })

  if (values.help) {
    console.log(`
Mock Synchronization Script

Usage: tsx scripts/sync-mocks-advanced.ts [options]

Options:
  -w, --watch    Watch for changes and auto-sync
  -h, --help     Show this help message

Examples:
  # One-time sync
  tsx scripts/sync-mocks-advanced.ts
  
  # Watch mode
  tsx scripts/sync-mocks-advanced.ts --watch
`)
    process.exit(0)
  }

  if (values.watch) {
    watchMocks()
  } else {
    await syncAllMocks()
  }
}

// Run the script
main().catch((error) => {
  console.error('Fatal error:', error)
  process.exit(1)
})