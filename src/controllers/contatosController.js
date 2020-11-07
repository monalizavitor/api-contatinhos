const contatosCollection = require('../models/contatosSchema')
const schema = require('../models/contatosSchema')

const getAll = (req, res) => {
    schema.find((error, contatos) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            return res.status(200).send({ mensagem: 'Tudo certo' + contatos })
        }
    })

}

const addContato = (req, res) => {
    const body = req.body

    const contato = new contatosCollection(body)

    contato.save((error) => {
        if (error) {
            return res.status(400).send(error)
        } else {
            return res.stauts(200).send({
                mensagem: 'Post com sucesso' + contato
            })
        }

    })
}

const getById = (req, res) => {
    const id = req.params.id

    contatosCollection.findById(id, (error, contato) => {
        if (error) {
            return res.status(500).send(error)
        } else if (contato){
            return res.status(200).send({menssagem: "get por id realizado com sucesso!" + contato})
        } else {
            return res.status(404).send('Id não encontrado!')
        }
    })
}

const getByNome = (req, res) => {
    const nome = req.params.nome
    contatosCollection.find({nome: nome}, (error, contato) => {
        if (error) {
            res.status(500).send(error)
        } else if (contato == "") {
            return res.status(404).send({mensagem: 'Contato não encontrado!' + contato})
        } else {
            return res.status(200).send('Get por nome realizado com sucesso!')
        }
    })
}




module.exports = {
    getAll,
    addContato
}