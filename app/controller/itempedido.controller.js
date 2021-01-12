const bd = require('../config/bd.config')
const Itempedido = bd.itempedido

exports.buscarTudo = (req, res) => {
    Itempedido.findAll().then(itempedidos => {
        res.send(itempedidos)
    })
}

exports.buscarID = (req, res) => {
    Itempedido.findByPk(req.params.id).then(itempedidos => {
        res.send(itempedidos)
    })
}

exports.criar = (req, res) => {
    Itempedido.create({
        produtoId: req.body.produtoId,
        pedidoId: req.body.pedidoId,
        quantidade: req.body.quantidade,
        valorunitario: req.body.valorunitario,
        valortotal: req.body.valortotal
    }).then(itempedido => {
        res.send(itempedido)
    })
}

exports.alterar = (req, res) => {
    Itempedido.update({
        produtoId: req.body.produtoId,
        pedidoId: req.body.pedidoId,
        quantidade: req.body.quantidade,
        valorunitario: req.body.valorunitario,
        valortotal: req.body.valortotal
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
    Itempedido.destroy({
        where: {id: req.params.id}
    }).then(() => {
        res.status(200).send({
            mensagem: "Registro deletado com sucesso"
        })
    })
}