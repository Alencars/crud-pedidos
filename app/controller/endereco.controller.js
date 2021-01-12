const bd = require('../config/bd.config')
const Endereco = bd.endereco

exports.buscarTudo = (req, res) => {
    Endereco.findAll().then(enderecos => {
        res.send(enderecos)
    })
}

exports.buscarID = (req, res) => {
    Endereco.findByPk(req.params.id).then(enderecos => {
        res.send(enderecos)
    })
}

exports.criar = (req, res) => {
    Endereco.create({
        endereco: req.body.endereco,
        cep: req.body.cep,
        bairro: req.body.bairro,
        numero: req.body.numero,
        complemento: req.body.complemento,
        situacao: req.body.situacao,
        pessoaId: req.body.pessoaId,
        cidadeId: req.body.cidadeId,
    }).then(endereco => {
        res.send(endereco)
    })
}

exports.alterar = (req, res) => {
    Endereco.update({
        endereco: req.body.endereco,
        cep: req.body.cep,
        bairro: req.body.bairro,
        numero: req.body.numero,
        complemento: req.body.complemento,
        situacao: req.body.situacao,
        pessoaId: req.body.pessoaId,
        cidadeId: req.body.cidadeId,
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
    Endereco.destroy({
        where: {id: req.params.id}
    }).then(() => {
        res.status(200).send({
            mensagem: "Registro deletado com sucesso"
        })
    })
}