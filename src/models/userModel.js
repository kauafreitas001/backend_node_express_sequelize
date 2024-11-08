const { DataTypes } = require( "sequelize" );
const sequelize = require( "../config/db" );

// Definição do modelo User utilizando Sequelize
const User = sequelize.define( "User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: { isEmail: true }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  company_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  config: {
    type: DataTypes.JSON,
    allowNull: true
  }
},
{
  tableName: "users",
  timestamps: true,
  createdAt: "createdAt",
  updatedAt: "updatedAt"
});

module.exports = User;
