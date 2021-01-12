const bd = require('../config/bd.config')
const   Contato = bd.contato

exports.buscarTudo = (req, res) => {
    Contato.findAll().then(contatos => {
        res.send(contatos)
    })
}

exports.buscarID = (req, res) => {
    Contato.findByPk(req.params.id).then(contatos => {
        res.send(contatos)
    })
}

exports.criar = (req, res) => {
    Contato.create({
        tipo: req.body.tipo,
        contato: req.body.contato,
        principal: req.body.principal,
        situacao: req.body.situacao,
        pessoaId: req.body.pessoaId
    }).then(contato => {
        res.send(contato)
    })
}

exports.alterar = (req, res) => {
    Contato.update({
        tipo: req.body.tipo,
        contato: req.body.contato,
        principal: req.body.principal,
        situacao: req.body.situacao,
        pessoaId: req.body.pessoaId
    },
    {
        where: {id: req.params.id}
    }).then(() => {
        res.send({
            mensagem: 'Registro alterado com sucesso'
        })
    })
}

exports.excluir = (req, res) => {
    Contato.destroy({
        where: {id: req.params.id}
    }).then(() => {
        res.status(200).send({
            mensagem: "Registro deletado com sucesso"
        })
    })
}