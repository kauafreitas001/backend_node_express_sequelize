const companyService = require( "../services/companyService" );

// Controlador para gerenciar as requisições relacionadas às empresas
const companyController = {
  
  getAllCompanies: async ( req, res ) => {
    try {
      const companies = await companyService.getAllCompanies();
      res.status( 200 ).json( companies );
    } catch ( error ) {
      res.status( 500 ).json({ error: error.message });
    }
  },
  
  getCompanyById: async ( req, res ) => {
    try {
      const { id } = req.params;
      const company = await companyService.getCompanyById( id );
      res.status( 200 ).json( company );
    } catch ( error ) {
      res.status( 404 ).json({ error: error.message });
    }
  },
  
  createCompany: async ( req, res ) => {
    try {
      const newCompany = await companyService.createCompany( req.body );
      res.status( 201 ).json({ message: "Empresa cadastrada com sucesso.", empresa: newCompany });
    } catch ( error ) {
      res.status( 500 ).json({ error: error.message });
    }
  },
  
  updateCompany: async ( req, res ) => {
    try {
      const { id } = req.params;
      await companyService.updateCompany( id, req.body );
      res.status( 200 ).json({ message: "Empresa atualizada com sucesso." });
    } catch ( error ) {
      res.status( 404 ).json({ error: error.message });
    }
  },
  
  deleteCompany: async ( req, res ) => {
    try {
      const { id } = req.params;
      const result = await companyService.deleteCompany( id );
      res.status( 200 ).json( result );
    } catch ( error ) {
      res.status( 404 ).json({ error: error.message });
    }
  }

};

module.exports = companyController;
