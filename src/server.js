const app = require( "./app" );
const PORT = process.env.PORT || 3000;

app.listen( PORT, ( err ) => {
  if ( err ) {
    console.log( "Erro ao iniciar servidor" );
    return;
  }
  console.log( `Servidor rodando na porta ${ PORT }`);
});
