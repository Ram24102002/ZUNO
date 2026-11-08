import express from 'express'
import cors from 'cors'
import products from './data/products.json' with { type: 'json' }

// The API on its own, shared by the local server (index.js) and Vercel (api/index.js)
const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => res.json({ ok: true }))

app.get('/api/products', (req, res) => res.json(products))

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p.id === req.params.id)
  if (!product) return res.status(404).json({ error: 'Product not found' })
  res.json(product)
})

export default app
