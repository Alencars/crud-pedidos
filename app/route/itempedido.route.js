module.exports = (server) => {
    const itempedidoController = require('../controller/itempedido.controller')

    server.get('/api/itempedido', itempedidoController.buscarTudo)
    server.get('/api/itempedido/:id', itempedidoController.buscarID)
    server.post('/api/itempedido', itempedidoController.criar)
    server.put('/api/itempedido/:id', itempedidoController.alterar)
    server.delete('/api/itempedido/:id', itempedidoController.excluir)
}