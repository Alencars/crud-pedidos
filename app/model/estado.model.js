module.exports = (connection, Sequelize) => {
    const Estado = connection.define('estado', {
        descricao: {
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
        uf: {
            type: Sequelize.CHAR(2),
            allowNull: false,
            notEmpty: false
            
            
        },
        pais: {
            type: Sequelize.CHAR(15),
            allowNull: false,
            notEmpty: false
        },
        situacao: {
            type: Sequelize.STRING(1)
        }
    })

    return Estado
}