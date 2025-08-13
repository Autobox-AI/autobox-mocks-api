interface Stats {
  totalOrganizations: number;
  totalProjects: number;
  totalSimulations: number;
  totalRuns: number;
  totalTraces: number;
  totalMetricDefinitions: number;
  totalMetricValues: number;
  totalBookmarks: number;
  avgTracesPerRun: number;
  avgMetricsPerSimulation: number;
  avgMetricValuesPerRun: number;
}

export function calculateStats(
  organizations: any[],
  projects: any[],
  simulations: any[],
  runs: any[],
  metricDefinitionsBySimulationId: Record<string, any[]>,
  metricValuesByRun: Record<string, any[]>,
  bookmarks: any[]
): Stats {
  const totalTraces = runs.reduce((sum, runData) => sum + (runData.traces?.length || 0), 0);
  const totalMetricDefinitions = Object.values(metricDefinitionsBySimulationId)
    .reduce((sum, defs) => sum + defs.length, 0);
  const totalMetricValues = Object.values(metricValuesByRun)
    .reduce((sum, values) => sum + values.length, 0);

  return {
    totalOrganizations: organizations.length,
    totalProjects: projects.length,
    totalSimulations: simulations.length,
    totalRuns: runs.length,
    totalTraces,
    totalMetricDefinitions,
    totalMetricValues,
    totalBookmarks: bookmarks.length,
    avgTracesPerRun: runs.length > 0 ? totalTraces / runs.length : 0,
    avgMetricsPerSimulation: simulations.length > 0 ? totalMetricDefinitions / simulations.length : 0,
    avgMetricValuesPerRun: runs.length > 0 ? totalMetricValues / runs.length : 0,
  };
}

export function printStats(stats: Stats, durationMinutes: number): void {
  console.log('\n' + '='.repeat(50));
  console.log('MOCK GENERATION STATISTICS');
  console.log('='.repeat(50));
  
  console.log('\nEntities Created:');
  console.log(`  Organizations:     ${stats.totalOrganizations}`);
  console.log(`  Projects:          ${stats.totalProjects}`);
  console.log(`  Simulations:       ${stats.totalSimulations}`);
  console.log(`  Runs:              ${stats.totalRuns}`);
  console.log(`  Traces:            ${stats.totalTraces}`);
  console.log(`  Metric Definitions: ${stats.totalMetricDefinitions}`);
  console.log(`  Metric Values:     ${stats.totalMetricValues}`);
  console.log(`  Bookmarks:         ${stats.totalBookmarks}`);
  
  console.log('\nAverages:');
  console.log(`  Traces per Run:         ${stats.avgTracesPerRun.toFixed(1)}`);
  console.log(`  Metrics per Simulation: ${stats.avgMetricsPerSimulation.toFixed(1)}`);
  console.log(`  Metric Values per Run:  ${stats.avgMetricValuesPerRun.toFixed(1)}`);
  
  console.log('\nExecution Time:');
  console.log(`  Duration: ${durationMinutes.toFixed(2)} minutes`);
  
  console.log('='.repeat(50));
}