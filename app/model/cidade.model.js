module.exports = (connection, Sequelize) => {
    const Cidade = connection.define('cidades', {
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
        situacao: {
            type: Sequelize.STRING(1)
        }
       
    })

    return Cidade
}