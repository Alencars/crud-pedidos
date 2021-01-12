module.exports = (server) => {
    const estadoController = require('../controller/estado.controller')

    server.get('/api/estado', estadoController.buscarTudo)
    server.get('/api/estado/:id', estadoController.buscarID)
    server.post('/api/estado', estadoController.criar)
    server.put('/api/estado/:id', estadoController.alterar)
    server.delete('/api/estado/:id', estadoController.excluir)
}