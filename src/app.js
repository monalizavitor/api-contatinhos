const index = require('./routes/index')
// const contatinhos = require('./routes/contatinhosRoutes')
const cors = require('cors')

const express = require('express')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/', index)
// app.use('/contatinho', contatinhos)


module.exports = app