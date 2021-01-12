module.exports = (connection, Sequelize) => {
    const Pedido = connection.define('pedidos', {
        data: {
            type: Sequelize.DATE,
            allowNull: false
        },
        valorTotal: {
            type: Sequelize.FLOAT(10,2)
            
        },
        situacao: {
            type: Sequelize.STRING(1)
        }
    })

    return Pedido
}