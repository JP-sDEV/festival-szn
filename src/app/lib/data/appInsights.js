let appInsights = require("applicationinsights");

if (!appInsights.defaultClient) {
  appInsights
    .setup(process.env.APPINSIGHTS_INSTRUMENTATIONKEY)
    .setAutoDependencyCorrelation(true)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true, true) // capture console.log & console.error
    .setUseDiskRetryCaching(true)
    .start();
}

export default appInsights;
