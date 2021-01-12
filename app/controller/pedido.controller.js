const bd = require('../config/bd.config')
const Pedido = bd.pedido

exports.buscarTudo = (req, res) => {
    Pedido.findAll().then(pedidos => {
        res.send(pedidos)
    })
}

exports.buscarID = (req, res) => {
    Pedido.findByPk(req.params.id).then(pedidos => {
        res.send(pedidos)
    })
}

exports.criar = (req, res) => {
    Pedido.create({
        data: req.body.data,
        valortotal: req.body.valortotal,
        situacao: req.body.situacao,
        pessoaId: req.body.pessoaId
    }).then(pedido => {
        res.send(pedido)
    })
}

exports.alterar = (req, res) => {
    Pedido.update({
        data: req.body.data,
        valortotal: req.body.valortotal,
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
    Pedido.destroy({
        where: {id: req.params.id}
    }).then(() => {
        res.status(200).send({
            mensagem: "Registro deletado com sucesso"
        })
    })
}