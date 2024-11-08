const sequelize = require( "../config/db" );
const { DataTypes } = require( "sequelize" );
require( "dotenv" ).config();

const userCreateTable = async () => {
  try {
    await sequelize.define( "User", {
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
        references: {
          model: "companies",
          key: "id"
        },
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true
      },
      config: {
        type: DataTypes.JSON,
        allowNull: true
      },
    },
    {
      tableName: "users",
      timestamps: true
    }).sync({ force: true });

    await sequelize.models.User.create({
      name: "Admin",
      email: "admin@empresa.com",
      password: "@Admin123",
      company_id: 1,
      config: {}
    });

    console.log( "Tabela users criada e usuário inicial inserido." );
  } catch ( error ) {
    console.error( "Erro ao criar a tabela users:", error );
  }
  
};

module.exports = userCreateTable;
