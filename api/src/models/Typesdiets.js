const { DataTypes } = require('sequelize')


/**dishTypes */

module.exports = (sequelize)=>{
    sequelize.define('typesdiets', {
        id:{
            type: DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true

        },
        name:{
            type: DataTypes.STRING,
            defaultValue:DataTypes.STRING
        }
    });
}