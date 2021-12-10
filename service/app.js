import express from 'express'

const app = express()
const port = 8000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cards', (req, res) => {
  res.json({ key: 'value' })
})

app.post('/cards', (req, res) => {
  const newCard = req.body
  console.log(JSON.stringify(newCard))
  res.sendStatus('202')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
