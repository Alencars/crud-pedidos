module.exports = (server) => {
    const pessoaController = require('../controller/pessoa.controller')

    server.get('/api/pessoa', pessoaController.buscarTudo)
    server.get('/api/pessoa/:id', pessoaController.buscarID)
    server.post('/api/pessoa', pessoaController.criar)
    server.put('/api/pessoa/:id', pessoaController.alterar)
    server.delete('/api/pessoa/:id', pessoaController.excluir)
}