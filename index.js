// IMPORTANT: Make sure to import `instrument.js` at the top of your file.
// If you're using ECMAScript Modules (ESM) syntax, use `import "./instrument.js";`
require("./instrument.js");

// All other imports below
// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
const Sentry = require("@sentry/node");

const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const SENTRY_AUTH_TOKEN = process.env.SENTRY_AUTH_TOKEN;


const port = 3000;


// All controllers should live here
app.get("/", function rootHandler(req, res) {
    res.send("<h1>Hello world, Welcome to Kanweitech</h1>");
});

// The error handler must be registered before any other error middleware and after all controllers
Sentry.setupExpressErrorHandler(app);

app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
});


// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
    // The error id is attached to the `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(res.sentry + "\n");
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});