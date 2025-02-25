/****************************************************************************************************************
Objetivo: Arquivo Responsável pela padronização de mensagens e status code 
Data : 18/02/2025 
versão: 1.0 
Autor: Pedro Victor

*******************************************************************************************************************/ 

/**********************************************Status Code de Erros ***********************************************/ 

const ERROR_REQUIRED_FIELDS = {status: false,  status_code: 400,    message: "Existem campos origatórios ou quantidade de caracteres que nao foram atendidos " }
const ERROR_INTERNAR_SERVER = {status: false,  status_code: 500,    message: "Devido a um erro interno no servidor. não foi possivel processar a requisção "}

/*****************************************Status code de sucesso ****************************************************/
const SUCESS_CREATED_ITEM = {status: true,  
                             status_code: 201,    
                             message:"Item criado com sucesso"}
module.exports = {
        ERROR_REQUIRED_FIELDS,
        SUCESS_CREATED_ITEM,
        ERROR_INTERNAR_SERVER
    }