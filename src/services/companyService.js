const Company = require( "../models/companyModel" );

// Serviço para gerenciar a lógica de negócios relacionada às empresas
const companyService = {
  
  getAllCompanies: async () => {
    try {
      const companies = await Company.findAll();
      return companies;
    } catch ( error ) {
      console.error( "Erro ao obter empresas:", error );
      throw new Error( "Erro ao obter empresas" );
    }
  },
  
  getCompanyById: async ( id ) => {
    try {
      const company = await Company.findByPk( id );
      if ( !company ) {
        throw new Error( "Empresa não encontrada" );
      }
      return company;
    } catch ( error ) {
      console.error( `Erro ao obter a empresa com ID ${ id }:`, error );
      throw new Error( "Erro ao obter empresa" );
    }
  },
  
  createCompany: async ( companyData ) => {
    try {
      const company = await Company.create( companyData );
      return company;
    } catch ( error ) {
      console.error( "Erro ao criar empresa:", error );
      throw new Error( "Erro ao criar empresa" );
    }
  },

  updateCompany: async ( id, companyData ) => {
    try {
      const [ updatedRows ] = await Company.update( companyData, { where: { id }});
      if ( updatedRows === 0 ) {
        throw new Error( "Empresa não encontrada" );
      }
      return await Company.findByPk( id );
    } catch ( error ) {
      console.error( `Erro ao atualizar a empresa com ID ${ id }:`, error );
      throw new Error( "Erro ao atualizar empresa" );
    }
  },
  
  deleteCompany: async ( id ) => {
    try {
      const deletedRows = await Company.destroy({ where: { id }});
      if ( deletedRows === 0 ) {
        throw new Error( "Empresa não encontrada" );
      }
      return { message: "Empresa excluída com sucesso" };
    } catch ( error ) {
      console.error( `Erro ao excluir a empresa com ID ${ id }:`, error );
      throw new Error( "Erro ao excluir empresa" );
    }
  }
  
};

module.exports = companyService;
