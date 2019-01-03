const express = require('express')
const app = express()
const parser = require('body-parser')
const cors = require('cors')
const monk = require('monk')
const url = 'mongodb://admin:password1@ds153113.mlab.com:53113/myguys'
const db = monk(url)
db.then(() => {
  console.log('Connected correctly to the server')
})

const people = db.get('myguys')
const port = 3030

app.use(parser.json());
app.use(cors());

// GET method route
app.get('/', async function (req, res) {
    const results = await people.find ({})
    res.status(200).send(results)
  })
  
  // POST method route
  app.post('/', function (req, res) {
    const result = people.insert(req.body)
    res.status(200).send(req.body)
  })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))