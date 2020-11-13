const controller = require('../controllers/contatosController')

const express = require('express')

const router = express.Router()

// retorna todos os contatos
router.get('/', controller.getAll)

//cria um novo contato
router.post('/criar', controller.addContact)

//retorna contato buscado por nome 
router.get('/nome/:nome', controller.getByName)

//retorna contato buscado por id
router.get('/id/:id', controller.getById)

//deleta contato
router.delete('/deletar/:id', controller.deleteContact)

//altera o campo 'celular' do cadastro
router.put('/atualizar/telefone/:id', controller.updateNumberContact)

//altera todo o cadastro
router.put('/atualizar/:id', controller.updateContact)



module.exports = router 