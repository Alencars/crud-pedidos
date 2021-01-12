const bd = require('../config/bd.config')
const Estado = bd.estado

exports.buscarTudo = (req, res) => {
    Estado.findAll().then(estados => {
        res.send(estados)
    })
}

exports.buscarID = (req, res) => {
    Estado.findByPk(req.params.id).then(estados => {
        res.send(estados)
    })
}

exports.criar = (req, res) => {
    Estado.create({
        descricao: req.body.descricao,
        uf: req.body.uf,
        pais: req.body.pais,
        situacao: req.body.situacao
    }).then(estado => {
        res.send(estado)
    })
}

exports.alterar = (req, res) => {
    Estado.update({
        descricao: req.body.nome,
        uf: req.body.uf,
        pais: req.body.pais,
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
    Estado.destroy({
        where: {id: req.params.id}
    }).then(() => {
        res.status(200).send({
            mensagem: "Registro deletado com sucesso"
        })
    })
}