const Sentry = require("@sentry/node");
const { nodeProfilingIntegration } = require("@sentry/profiling-node");

Sentry.init({
    dsn: "https://ca1f14428c1c34e1b996f9c33e4d0ab1@o4507946732093440.ingest.de.sentry.io/4507946744283216",
    integrations: [
        nodeProfilingIntegration(),
    ],
    // Tracing
    // Capture 100% of the transaction
    tracesSampleRate: 1.0, 

    // Set sampling rate for profiling - this is relative to tracesSampleRate
    profilesSampleRate: 1.0,
    
});