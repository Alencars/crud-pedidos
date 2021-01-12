module.exports = (server) => {
    const enderecoController = require('../controller/endereco.controller')

    server.get('/api/endereco', enderecoController.buscarTudo)
    server.get('/api/endereco/:id', enderecoController.buscarID)
    server.post('/api/endereco', enderecoController.criar)
    server.put('/api/endereco/:id', enderecoController.alterar)
    server.delete('/api/endereco/:id', enderecoController.excluir)
}