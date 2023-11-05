const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
    },
    flag: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    continents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.DECIMAL(10, 2)
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },{
    timestamps: false // Deshabilitar timestamps
  });
};
