const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
/** [ ] Receta con las siguientes propiedades:
ID: *
Nombre *
Resumen del plato *
Puntuación
Nivel de "comida saludable"
Paso a paso
[ ] Tipo de dieta con las siguientes propiedades:
ID
Nombre/ */
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    healthScore:{
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    analyzedInstructions:{
      type: DataTypes.STRING

    }

  });
};
