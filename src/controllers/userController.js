const userService = require( "../services/userService" );

// Controlador para gerenciar as requisições relacionadas aos usuários
const userController = {
  
  getAllUsers: async ( req, res ) => {
    try {
      const users = await userService.getAllUsers();
      res.status( 200 ).json( users );
    } catch ( error ) {
      res.status( 500 ).json({ error: error.message });
    }
  },
  
  getUserById: async ( req, res ) => {
    try {
      const { id } = req.params;
      const user = await userService.getUserById( id );
      res.status( 200 ).json( user );
    } catch ( error ) {
      res.status( 404 ).json({ error: error.message });
    }
  },
  
  createUser: async ( req, res ) => {
    try {
      const newUser = await userService.createUser( req.body );
      res.status( 201 ).json({ message: "Usuário cadastrado com sucesso.", usuario: newUser });
    } catch ( error ) {
      res.status( 500 ).json({ error: error.message });
    }
  },
  
  updateUser: async ( req, res ) => {
    try {
      const { id } = req.params;
      await userService.updateUser( id, req.body );
      res.status( 200 ).json({ message: "Usuário atualizado com sucesso." });
    } catch ( error ) {
      res.status( 404 ).json({ error: error.message });
    }
  },
  
  deleteUser: async ( req, res ) => {
    try {
      const { id } = req.params;
      const result = await userService.deleteUser( id );
      res.status( 200 ).json( result) ;
    } catch ( error ) {
      res.status( 404 ).json({ error: error.message });
    }
  }
  
};

module.exports = userController;
