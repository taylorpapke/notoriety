import Express from 'express'

const app = Express()
const port = 8000

const handler = (req, res) => {
  res.send('Hello World!')
}

app.get('/', handler)
app.listen(port)
