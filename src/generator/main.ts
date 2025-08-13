import { DataGenerator } from './services/dataGenerator'
import { calculateStats, printStats } from './utils/stats'

async function main() {
  const startTime = Date.now()

  try {
    const dataLoader = new DataGenerator()
    const {
      organizations,
      projects,
      simulations,
      metricDefinitionsBySimulationId,
      runs,
      metricValuesByRun,
      bookmarks,
    } = await dataLoader.generate()

    const endTime = Date.now()
    const durationMinutes = (endTime - startTime) / 60000

    const stats = calculateStats(
      organizations,
      projects,
      simulations,
      runs,
      metricDefinitionsBySimulationId,
      metricValuesByRun,
      bookmarks
    )

    printStats(stats, durationMinutes)

    console.log('\n' + '='.repeat(50))
    console.log('GENERATED IDS SUMMARY')
    console.log('='.repeat(50))

    console.log('\nOrganization IDs:')
    for (const org of organizations) {
      console.log(`  - ${org.name}: ${org.id}`)
    }

    console.log('\nProject IDs:')
    for (const project of projects) {
      console.log(`  - ${project.name}: ${project.id}`)
    }

    console.log('\nSimulation IDs:')
    for (const sim of simulations) {
      console.log(`  - ${sim.name}: ${sim.id}`)
    }

    console.log('\nBookmarks Created:')
    for (const bookmark of bookmarks) {
      console.log(`  - ${bookmark.type}: ${bookmark.item_name} (${bookmark.item_id})`)
    }

    console.log('='.repeat(50))
  } catch (error) {
    console.error('Error during mock generation:', error)
    process.exit(1)
  }
}

if (require.main === module) {
  main().catch(console.error)
}

export { main }
