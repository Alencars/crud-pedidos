module.exports = (connection, Sequelize) => {
    const Endereco = connection.define('enderecos', {
        endereco: {
            type: Sequelize.STRING(150),
            allowNull: false
        },
        cep: {
            type: Sequelize.STRING(9)
        },
        bairro: {
            type: Sequelize.STRING(150),
            allowNull: false
        },
        numero: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        complemento: {
            type: Sequelize.STRING(250),
            allowNull: false
        },
        situacao: {
            type: Sequelize.STRING(1)
        }
    })

    return Endereco
}