const express = require('express')
const reload = require('reload')
const app = express()

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname })
})

app.listen(3000)

reload(app)