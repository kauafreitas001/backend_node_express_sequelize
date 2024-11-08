// Middleware para validação dos dados das empresas
const companyMiddleware = {
  validateCompanyData: ( req, res, next ) => {
    const { name, registration_number, email } = req.body;
    if ( !name || !registration_number || !email ) {
      return res.status( 400 ).json({ error: "Nome, numero de registro e e-mail são obrigatórios" });
    }

    if ( email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test( email )) {
      return res.status( 400 ).json({ error: "Email inválido" });
    }

    next();
  },
};

module.exports = companyMiddleware;
