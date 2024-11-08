// Middleware para validação dos dados dos usuários
const userMiddleware = {
  validateUserData: ( req, res, next ) => {
    const { name, email, password, company_id } = req.body;
    if ( !name || !email || !password || !company_id ) {
      return res.status( 400 ).json({ error: "Nome, email, senha e id da empresa são obrigatórios" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ( !emailRegex.test( email )) {
      return res.status( 400 ).json({ error: "Email inválido" });
    }

    if ( password.length < 6 ) {
      return res.status( 400 ).json({ error: "A senha deve ter pelo menos 6 caracteres" });
    }
  
    next();
  },
};

module.exports = userMiddleware;
