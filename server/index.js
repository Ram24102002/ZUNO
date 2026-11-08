import express from 'express'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import app from './app.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PORT = process.env.PORT || 5000
const CLIENT_DIST = path.join(__dirname, '..', 'client', 'dist')

// Local production mode: serve the built React app from the same server
if (existsSync(CLIENT_DIST)) {
  app.use(express.static(CLIENT_DIST))
  app.get(/^(?!\/api).*/, (req, res) => res.sendFile(path.join(CLIENT_DIST, 'index.html')))
}

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Something went wrong' })
})

app.listen(PORT, () => console.log(`ZUNO server running on http://localhost:${PORT}`))
