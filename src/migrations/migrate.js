const sequelize = require( "../config/db" );

const companyCreateTable = require( "./companyCreateTable" );
const userCreateTable = require( "./userCreateTable" );

const runMigrations = async () => {
  try {
    console.log( "Iniciando migrações..." );

    await companyCreateTable();
    console.log( "Migração da tabela companies concluída." );

    await userCreateTable();
    console.log( "Migração da tabela users concluída." );

    console.log( "Todas as migrações foram executadas com sucesso." );
  } catch ( error ) {
    console.error( "Erro ao executar as migrações:", error );
  } finally {
    await sequelize.close();
  }
}

runMigrations();
