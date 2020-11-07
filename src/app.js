const index = require('./routes/index')
const contatos = require('./routes/contatosRoutes')
const db = require('./models/contatosRepository')

const express = require('express')
const app = express()
const cors = require('cors')

db.connect()
app.use(cors())
app.use(express.json())

app.use('/', index)
app.use('/contatos', contatos)


module.exports = app