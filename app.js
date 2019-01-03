const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000
const parser = require('body-parser')

app.use(parser.json());
app.use(cors());

// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  })
  
  // POST method route
  app.post('/', function (req, res) {
    res.status(200).send(req.body)
  })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))