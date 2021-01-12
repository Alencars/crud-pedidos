module.exports = (connection, Sequelize) => {
    const Pessoa = connection.define('pessoas', {
        nome: {
            type: Sequelize.STRING(150),
            allowNull: false,
            validate: {
                notNull:{
                    msg: 'Por favor informe o nome'
                },
                notEmpty:{
                    msg: 'Nome não pode ser vazio'
                }
            }
        },
        tipoPessoa: {
            type: Sequelize.BOOLEAN
        },
        cpfcnpj: {
            type: Sequelize.STRING(18),
            allowNull: false
        },
        documento: {
            type: Sequelize.STRING(45),
            allowNull: false
        },
        fornecedor: {
            type: Sequelize.BOOLEAN
        },
        cliente: {
            type: Sequelize.BOOLEAN
        },
        situacao: {
            type: Sequelize.STRING(1)
        },
    })

    return Pessoa
}