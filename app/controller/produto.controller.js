const bd = require('../config/bd.config')
const Produto = bd.produto

exports.buscarTudo = (req, res) => {
    Produto.findAll().then(produtos => {
        res.send(produtos)
    })
}

exports.buscarID = (req, res) => {
    Produto.findByPk(req.params.id).then(produtos => {
        res.send(produtos)
    })
}

exports.criar = (req, res) => {
    Produto.create({
        descricao: req.body.descricao,
        unidademedida: req.body.unidademedida,
        quantidade: req.body.quantidade,
        valor: req.body.valor,
        situacao: req.body.situacao
    }).then(produto => {
        res.send(produto)
    })
}

exports.alterar = (req, res) => {
    Produto.update({
        descricao: req.body.descricao,
        unidademedida: req.body.unidademedida,
        quantidade: req.body.quantidade,
        valor: req.body.valor,
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
    Produto.destroy({
        where: {id: req.params.id}
    }).then(() => {
        res.status(200).send({
            mensagem: "Registro deletado com sucesso"
        })
    })
}