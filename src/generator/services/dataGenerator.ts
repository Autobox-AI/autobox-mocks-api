import { promises as fs } from 'fs'
import path from 'path'
import { settings } from '../config/settings'
import { generateBookmarks } from '../generators/bookmarks'
import { generateMetricDefinitions, generateMetricValues } from '../generators/metrics'
import { generateRuns } from '../generators/runs'
import { organizations } from '../seeds/organizations'
import { projects } from '../seeds/projects'
import { simulations } from '../seeds/simulations'

export class DataGenerator {
  private mocksPath: string

  constructor(mocksPath = settings.mocksPath) {
    this.mocksPath = mocksPath
  }

  async generate() {
    const simulationsById = simulations.reduce(
      (acc, sim) => {
        acc[sim.id] = sim
        return acc
      },
      {} as Record<string, any>
    )

    const [metricDefinitionsBySimulationId, runs] = await Promise.all([
      generateMetricDefinitions(simulations),
      generateRuns(simulations),
    ])

    const metricValuesByRun: Record<string, any[]> = {}

    const metricValuePromises = runs.map(async (runData) => {
      const { run, traces } = runData
      const simulation = simulationsById[run.simulation_id]
      const metricDefinitions = metricDefinitionsBySimulationId[simulation.id]

      const metricValues = await generateMetricValues(run, traces, metricDefinitions, simulation)
      metricValuesByRun[metricValues.runId] = metricValues.metrics
    })

    await Promise.all(metricValuePromises)

    const bookmarks = generateBookmarks(projects, simulations)

    await this.saveToMocks({
      organizations,
      projects,
      simulations,
      metricDefinitionsBySimulationId,
      runs,
      metricValuesByRun,
      bookmarks,
    })

    return {
      organizations,
      projects,
      simulations,
      metricDefinitionsBySimulationId,
      runs,
      metricValuesByRun,
      bookmarks,
    }
  }

  private async saveToMocks(data: any) {
    await fs.mkdir(this.mocksPath, { recursive: true })

    const savePromises = [
      fs.writeFile(
        path.join(this.mocksPath, 'organizations.json'),
        JSON.stringify(data.organizations, null, 2)
      ),
      fs.writeFile(
        path.join(this.mocksPath, 'projects.json'),
        JSON.stringify(data.projects, null, 2)
      ),
      fs.writeFile(
        path.join(this.mocksPath, 'simulations.json'),
        JSON.stringify(data.simulations, null, 2)
      ),
      fs.writeFile(
        path.join(this.mocksPath, 'metric_definitions_by_simulation_id.json'),
        JSON.stringify(data.metricDefinitionsBySimulationId, null, 2)
      ),
      fs.writeFile(path.join(this.mocksPath, 'runs.json'), JSON.stringify(data.runs, null, 2)),
      fs.writeFile(
        path.join(this.mocksPath, 'metric_values_by_run.json'),
        JSON.stringify(data.metricValuesByRun, null, 2)
      ),
      fs.writeFile(
        path.join(this.mocksPath, 'bookmarks.json'),
        JSON.stringify(data.bookmarks, null, 2)
      ),
    ]

    await Promise.all(savePromises)
    console.log(`✓ Saved data to mocks at ${this.mocksPath}`)
  }
}
