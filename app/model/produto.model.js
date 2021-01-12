module.exports = (connection, Sequelize) => {
    const Produto = connection.define('produtos', {
        descricao: {
            type: Sequelize.STRING(250),
            allowNull: false
        },
        unidadeMedida: {
            type: Sequelize.STRING(2)
        },
        quantidade: {
            type: Sequelize.FLOAT(10,2)
        },
        valor: {
            type: Sequelize.FLOAT(10,2)
        },
        situacao: {
            type: Sequelize.STRING(1)
        },
    })

    return Produto
}