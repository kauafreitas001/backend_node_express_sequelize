const sequelize = require( "../config/db" );
const { DataTypes } = require( "sequelize" );
require( "dotenv" ).config();

const companyCreateTable = async () => {
  try {
    await sequelize.define( "Company", {
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
      timestamps: true
    }).sync({ force: true });

    await sequelize.models.Company.create({
      name: "Empresa Administradora",
      registration_number: "00.000.000/0001-00",
      email: "admin@empresa.com",
      phone: "(99) 99999-9999",
      address: "Rua Empresa, n 123 - Bairro. Cidade - Estado",
      config: {}
    });

    console.log( "Tabela companies criada e empresa inicial inserida." );
  } catch ( error ) {
    console.error( "Erro ao criar a tabela companies:", error );
  }
  
}

module.exports = companyCreateTable;
