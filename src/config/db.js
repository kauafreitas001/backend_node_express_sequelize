const { Sequelize } = require( "sequelize" );
require( "dotenv" ).config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false // Define como 'false' para desabilitar logs de queries
  }
);

const authenticate = async () => {
  try {
    await sequelize.authenticate();
    console.log( "Conexão com o banco de dados MySQL realizada com sucesso!" );
  } catch ( error ) {
    console.error( "Erro ao conectar ao banco de dados:", error );
    process.exit( 1 );
  }
}

authenticate();

module.exports = sequelize;
