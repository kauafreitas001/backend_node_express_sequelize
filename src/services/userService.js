const User = require( "../models/userModel" );

// Serviço para gerenciar a lógica de negócios relacionada aos usuários
const userService = {
  
  getAllUsers: async () => {
    try {
      const users = await User.findAll();
      return users;
    } catch ( error ) {
      console.error( "Erro ao obter usuários:", error );
      throw new Error( "Erro ao obter usuários" );
    }
  },
  
  getUserById: async ( id ) => {
    try {
      const user = await User.findByPk( id );
      if ( !user ) {
        throw new Error( "Usuário não encontrado" );
      }
      return user;
    } catch ( error ) {
      console.error( `Erro ao obter o usuário com ID ${ id }:`, error );
      throw new Error( "Erro ao obter usuário" );
    }
  },
  
  createUser: async ( userData ) => {
    try {
      const user = await User.create( userData );
      return user;
    } catch ( error ) {
      console.error( "Erro ao criar usuário:", error );
      throw new Error( "Erro ao criar usuário" );
    }
  },
  
  updateUser: async ( id, userData ) => {
    try {
      const [ updatedRows ] = await User.update( userData, { where: { id }});
      if ( updatedRows === 0 ) {
        throw new Error( "Usuário não encontrado" );
      }
      return await User.findByPk( id );
    } catch ( error ) {
      console.error( `Erro ao atualizar o usuário com ID ${ id }:`, error );
      throw new Error( "Erro ao atualizar usuário" );
    }
  },
  
  deleteUser: async ( id ) => {
    try {
      const deletedRows = await User.destroy({ where: { id }});
      if ( deletedRows === 0 ) {
        throw new Error( "Usuário não encontrado" );
      }
      return { message: "Usuário excluído com sucesso" };
    } catch ( error ) {
      console.error( `Erro ao excluir o usuário com ID ${ id }:`, error );
      throw new Error( "Erro ao excluir usuário" );
    }
  }

};

module.exports = userService;
