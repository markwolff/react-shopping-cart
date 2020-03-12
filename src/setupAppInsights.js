import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: '5be53845-3339-45c5-824a-2c2f9474c0be',
    enableCorsCorrelation: true,
    enableAutoRouteTracking: true,
    disableFetchTracking: false,
    correlationHeaderExcludedDomains: ["api.github.com"]
  }
});
appInsights.loadAppInsights();
appInsights.trackPageView();

export default appInsights;
