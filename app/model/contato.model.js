module.exports = (connection, Sequelize) => {
    const Contato = connection.define('contatos', {
        tipo: {
            type: Sequelize.STRING(1),
            allowNull: false
        },
        contato: {
            type: Sequelize.STRING(150),
            allowNull: false
        },
        principal: {
            type: Sequelize.BOOLEAN
        },
        situacao: {
            type: Sequelize.STRING(1)
        }
    })

    return Contato
}