import { ApplicationInsights } from '@microsoft/applicationinsights-web'

class TelemetryService {
    private appInsights: ApplicationInsights

    initialize() {
        if (process.env.AZURE_INSTRUMENTATION_KEY) {
            this.appInsights = new ApplicationInsights({
                config: {
                    instrumentationKey: process.env.AZURE_INSTRUMENTATION_KEY,
                    disableFetchTracking: false,
                    loggingLevelConsole: 2,
                    isCookieUseDisabled: true,
                },
            })

            this.appInsights.loadAppInsights()

            this.appInsights.addTelemetryInitializer((item) => {
                item?.tags?.push({ 'ai.cloud.app': 'ModernWeb' })
            })

            this.appInsights.trackPageView({})
        }
    }
}
export const telemetry = new TelemetryService()
