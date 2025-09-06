#!/usr/bin/env tsx

import { promises as fs } from 'fs'
import path from 'path'

const MOCKS_JSON_DIR = path.join(__dirname, '..', 'mocks')
const MOCKS_TS_DIR = path.join(__dirname, '..', 'src', 'mocks')

interface FileMapping {
  jsonFile: string
  tsFile: string
  exportName: string
  transform?: (data: any) => any
}

const FILE_MAPPINGS: FileMapping[] = [
  {
    jsonFile: 'projects.json',
    tsFile: 'projects.ts',
    exportName: 'projects',
  },
  {
    jsonFile: 'metric_definitions_by_simulation_id.json',
    tsFile: 'metricDefinitions.ts',
    exportName: 'metricDefinitionsBySimulationId',
  },
  {
    jsonFile: 'metric_values_by_run.json',
    tsFile: 'metricValues.ts',
    exportName: 'metricValuesByRun',
  },
  {
    jsonFile: 'bookmarks.json',
    tsFile: 'bookmarks.ts',
    exportName: 'bookmarks',
  },
  {
    jsonFile: 'simulations.json',
    tsFile: 'simulations.ts',
    exportName: 'simulations',
  },
  {
    jsonFile: 'runs.json',
    tsFile: 'runs.ts',
    exportName: 'runs',
  },
  {
    jsonFile: 'traces.json',
    tsFile: 'traces.ts',
    exportName: 'tracesByRunId',
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
  data: any
): Promise<void> {
  const content = `export const ${exportName} = ${JSON.stringify(data, null, 2)} as const\n`
  
  try {
    await fs.writeFile(filePath, content)
    console.log(`✓ Synced ${exportName} to ${path.basename(filePath)}`)
  } catch (error) {
    console.error(`Error writing ${filePath}:`, error)
    throw error
  }
}

async function syncMocks(): Promise<void> {
  console.log('Starting mock synchronization...\n')

  for (const mapping of FILE_MAPPINGS) {
    const jsonPath = path.join(MOCKS_JSON_DIR, mapping.jsonFile)
    const tsPath = path.join(MOCKS_TS_DIR, mapping.tsFile)

    try {
      await fs.access(jsonPath)
      
      let data = await readJsonFile(jsonPath)
      
      if (mapping.transform) {
        data = mapping.transform(data)
      }
      
      await writeTypeScriptFile(tsPath, mapping.exportName, data)
    } catch (error) {
      if ((error as any).code === 'ENOENT') {
        console.warn(`⚠ ${mapping.jsonFile} not found, skipping...`)
      } else {
        console.error(`✗ Failed to sync ${mapping.jsonFile}:`, error)
      }
    }
  }

  console.log('\n✓ Mock synchronization completed!')
}

syncMocks().catch((error) => {
  console.error('Fatal error during synchronization:', error)
  process.exit(1)
})