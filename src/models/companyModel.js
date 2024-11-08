const { DataTypes } = require( "sequelize" );
const sequelize = require( "../config/db" );

// Definição do modelo companies utilizando Sequelize
const Company = sequelize.define( "Company", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  registration_number: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: { isEmail: true }
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  config: {
    type: DataTypes.JSON,
    allowNull: true
  }
},
{
  tableName: "companies",
  timestamps: true,
  createdAt: "createdAt",
  updatedAt: "updatedAt"
});

module.exports = Company;
