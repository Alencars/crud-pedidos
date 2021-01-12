const Sequelize = require('sequelize')
const acesso = require('./bd.acesso')

const connection = new Sequelize(acesso.database, acesso.username,acesso.password,{
    host: acesso.host,
    dialect: acesso.dialect
})

const bd = {}
bd.Sequelize = Sequelize
bd.connection = connection

bd.produto = require('../model/produto.model')(connection, Sequelize)
bd.pessoa = require('../model/pessoa.model')(connection, Sequelize)
bd.pedido = require('../model/pedido.model')(connection, Sequelize)
bd.itempedido = require('../model/itempedido.model')(connection, Sequelize)
bd.estado = require('../model/estado.model')(connection, Sequelize)
bd.endereco = require('../model/endereco.model')(connection, Sequelize)
bd.contato = require('../model/contato.model')(connection, Sequelize)
bd.cidade = require('../model/cidade.model')(connection, Sequelize)

bd.cidade.belongsTo(bd.estado)
bd.contato.belongsTo(bd.pessoa)
bd.pedido.belongsTo(bd.pessoa)
bd.endereco.belongsTo(bd.pessoa)
bd.endereco.belongsTo(bd.cidade)

bd.produto.belongsToMany(bd.pedido, {through: bd.itempedido});
bd.pedido.belongsToMany(bd.produto, {through: bd.itempedido});

module.exports = bd