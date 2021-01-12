const bd = require('../config/bd.config')
const Pessoa = bd.pessoa

exports.buscarTudo = (req, res) => {
    Pessoa.findAll().then(pessoas => {
        res.send(pessoas)
    })
}

exports.buscarID = (req, res) => {
    Pessoa.findByPk(req.params.id).then(pessoas => {
        res.send(pessoas)
    })
}

exports.criar = (req, res) => {
    Pessoa.create({
        nome: req.body.nome,
        tipopessoa: req.body.tipopessoa,
        cpfcnpj: req.body.cpfcnpj,
        documento: req.body.documento,
        fornecedor: req.body.fornecedor,
        cliente: req.body.cliente,
        situacao: req.body.situacao
    }).then(pessoa => {
        res.send(pessoa)
    })
}

exports.alterar = (req, res) => {
    Pessoa.update({
        nome: req.body.nome,
        tipopessoa: req.body.tipopessoa,
        cpfcnpj: req.body.cpfcnpj,
        documento: req.body.documento,
        fornecedor: req.body.fornecedor,
        cliente: req.body.cliente,
        situacao: req.body.situacao
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
    Pessoa.destroy({
        where: {id: req.params.id}
    }).then(() => {
        res.status(200).send({
            mensagem: "Registro deletado com sucesso"
        })
    })
}