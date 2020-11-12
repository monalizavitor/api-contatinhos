const contatosCollection = require('../models/contatosSchema')

const getAll = (req, res) => {

    contatosCollection.find((error, contacts) => {
        if (error) {
            return res.status(500).json(error)
        } else {
            return res.status(200).send({ mensagem: 'Get relizado com sucesso!' + contacts })
        }
    })

}

const addContact = (req, res) => {

    const contactBody = req.body
    const contact = new contatosCollection(contactBody)

    contact.save((error) => {
        if (error) {
            return res.status(400).send(error)
        } else {
            return res.status(200).send({
                message: 'Post realizado com sucesso' + contact
            })
        }

    })
}

const getById = (req, res) => {

    const id = req.params.id

    contatosCollection.findById(id, (error, contact) => {
        if (error) {
            return res.status(500).send(error)
        } else if (contact) {
            return res.status(200).send({ message: 'Get por id realizado com sucesso!' + contact })
        } else {
            return res.status(404).send({ message: 'Id não encontrado!' })
        }
    })
}

const getByName = (req, res) => {

    const { name } = req.params

    contatosCollection.find(name, (error, contact) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            if (contact == "") {
                return res.status(404).send({ message: 'Contato não encontrado!' })
            } else {
                return res.status(200).send({ message: 'Get por nome realizado com sucesso!' + contact })
            }
        }
    })
}

const deleteContact = (req, res) => {

    const { id } = req.params

    contatosCollection.findByIdAndDelete(id, (error, contact) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            if (contact) {
                return res.status(200).send({ message: contact + 'Contato deletado com sucesso!' })
            } else {
                return res.status(404).send({ message: 'Esse contato não foi encontrado' })
            }
        }

    })
}

const updateNumberContact = (req, res) => {

    const { id } = id.params
    const { body } = req.body
    const update = { new: true }

    if (body.nome != null || body.dataNascimento != null) {
        return res.status(400).json({ message: 'Edição permitida somente no campo celular' })
    } else {
        contatosCollection.findByIdAndUpdate(id, body, update, (error, contact) => {
            if (error) {
                return res.status(500).send(error)
            } else if (contact) {
                return res.status(200).send({ message: 'Número de celular atulizado com sucesso!' + contact })
            } else {
                return res.status(404).send({ message: 'Contato não encontrado.' })
            }
        })
    }
}

const updateContact = (req, res) => {

    const { id } = req.params
    const body = req.body
    const update = { new: true }

    contatosCollection.findByIdAndUpdate(id, body, update, (error, contact) => {

        if (error) {
            return res.status(500).send({ message: 'Houve um erro!' + error })
        } else {
            return res.status(200).send({ message: 'Contato atulizado com sucesso!' + contact })
        }
    })
}

module.exports = {
    getAll,
    addContact,
    getById,
    getByName,
    deleteContact,
    updateNumberContact,
    updateContact
}