const controller = require('../controllers/contatosController')
const express = require('express')

const router = express.Router()


router.get('/', controller.getAll)

router.post('/criar', controller.addContato)


module.exports = router 