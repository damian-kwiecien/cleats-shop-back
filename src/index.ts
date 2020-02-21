import express from 'express'

const app = express()
const port = 4100

app.get('/', (req, res) => res.send('aaaa'))

app.listen(port)