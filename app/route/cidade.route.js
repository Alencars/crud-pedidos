module.exports = (server) => {
    const cidadeController = require('../controller/cidade.controller')

    server.get('/api/cidade', cidadeController.buscarTudo)
    server.get('/api/cidade/:id', cidadeController.buscarID)
    server.post('/api/cidade', cidadeController.criar)
    server.put('/api/cidade/:id', cidadeController.alterar)
    server.delete('/api/cidade/:id', cidadeController.excluir)
}