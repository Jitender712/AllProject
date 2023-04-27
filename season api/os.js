const express = require('express')
const app = express()

app.get('/jeettu', function (req, res) {
  res.send('Hello World')
})

app.listen(3002)