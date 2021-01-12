module.exports = (server) => {
    const contatoController = require('../controller/contato.controller')

    server.get('/api/contato', contatoController.buscarTudo)
    server.get('/api/contato/:id', contatoController.buscarID)
    server.post('/api/contato', contatoController.criar)
    server.put('/api/contato/:id', contatoController.alterar)
    server.delete('/api/contato/:id', contatoController.excluir)
}