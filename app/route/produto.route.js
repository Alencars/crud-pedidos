module.exports = (server) => {
    const produtoController = require('../controller/produto.controller')

    server.get('/api/produto', produtoController.buscarTudo)
    server.get('/api/produto/:id', produtoController.buscarID)
    server.post('/api/produto', produtoController.criar)
    server.put('/api/produto/:id', produtoController.alterar)
    server.delete('/api/produto/:id', produtoController.excluir)
}