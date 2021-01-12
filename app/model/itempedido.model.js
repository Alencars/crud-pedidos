module.exports = (connection, Sequelize) => {
    const Itempedido = connection.define('itempedido', {
        quantidade: {
            type: Sequelize.FLOAT(10,2)
        },
        valorUnitario: {
            type: Sequelize.FLOAT(10,2)
        },
        valorTotal: {
            type: Sequelize.FLOAT(10,2)
        }
    })

    return Itempedido
}