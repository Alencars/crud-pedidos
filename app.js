const express = require('express')
const Sequelize = require('sequelize')
const bodyParser = require('body-parser')
const mysql = require('mysql2')

const server = express()
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extend: true}))

server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS")
    next()
})

const bd = require('./app/config/bd.config')

bd.connection.sync({force: true}).then(() => {
    console.log('Conexão de banco realizada com sucesso')
    console.log('Para recriar/atualizar as tebelas ativa force: {force: true}')
})

require('./app/route/cidade.route')(server)
require('./app/route/contato.route')(server)
require('./app/route/estado.route')(server)
require('./app/route/itempedido.route')(server)
require('./app/route/endereco.route')(server)
require('./app/route/pedido.route')(server)
require('./app/route/pessoa.route')(server)
require('./app/route/produto.route')(server)

server.listen(3000, () => {
    console.log('Servidor online em http://localhost:3000')
    console.log('Para encerrar servidor: CTRL+C')
})