const bd = require('../config/bd.config')
const Cidade = bd.cidade

exports.buscarTudo = (req, res) => {
    Cidade.findAll().then(cidades => {
        res.send(cidades)
    })
}

exports.buscarID = (req, res) => {
    Cidade.findByPk(req.params.id).then(cidades => {
        res.send(cidades)
    })
}

exports.criar = (req, res) => {
    Cidade.create({
        nome: req.body.nome,
        situacao: req.body.situacao,
        estadoId: req.body.estadoId
    }).then(cidade => {
        res.send(cidade)
    })
}

exports.alterar = (req, res) => {
    Cidade.update({
        nome: req.body.nome,
        situacao: req.body.situacao,
        estadoId: req.body.estadoId
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
    Cidade.destroy({
        where: {id: req.params.id}
    }).then(() => {
        res.status(200).send({
            mensagem: "Registro deletado com sucesso"
        })
    })
}