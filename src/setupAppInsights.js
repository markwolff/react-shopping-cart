import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: '25498541-2456-471a-bd73-c915ad18e7ef',
    enableCorsCorrelation: true,
    enableAutoRouteTracking: true,
    disableFetchTracking: false,
    correlationHeaderExcludedDomains: ["api.github.com"]
  }
});
appInsights.loadAppInsights();
appInsights.trackPageView();

export default appInsights;
