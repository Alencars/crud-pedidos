module.exports = (server) => {
    const pedidoController = require('../controller/pedido.controller')

    server.get('/api/pedido', pedidoController.buscarTudo)
    server.get('/api/pedido/:id', pedidoController.buscarID)
    server.post('/api/pedido', pedidoController.criar)
    server.put('/api/pedido/:id', pedidoController.alterar)
    server.delete('/api/pedido/:id', pedidoController.excluir)
}