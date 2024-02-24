/* eslint-disable @typescript-eslint/no-var-requires */
const createServer = require('next/dist/server/lib/start-server.js')
const PORT = process.env.PORT || 3000

createServer. startServer({ port: PORT }).then(async (app) => {
    console.info(`started server on http://localhost:${PORT}`)
    await app.prepare()
})