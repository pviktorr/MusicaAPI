/*
Objetivo: Controller referente as ações de CRUD de Música 
Data : 11?02/2025

*/ 
//Import do arquivo de mensagens e status code
const message = require('../../modulo/config.js')

//Import para realizar o CRUD no banco de dados
const musicaDAO = require('../../model/DAO/musica.js')

//Função para inserir uma nova musica
const inserirMusica = async function(musica){
    try {
        
    
    if(musica.nome            == '' || musica.nome            == null || musica.nome            == undefined || musica.nome.length            > 100 ||
       musica.duracao         == '' || musica.duracao         == null || musica.duracao         == undefined || musica.duracao.length         > 8  ||
       musica.data_lancamento == '' || musica.data_lancamento == null || musica.data_lancamento == undefined || musica.data_lancamento.length > 10  ||
       musica.letra    == undefined || musica.link       == undefined || musica.link.length                                                         > 200
    ){
        return message.ERROR_REQUIRED_FIELDS//status code 400
    }else{
        //encaminhando os dados da musica para o DAO realizar o insert no Banco de dados
        let resultMusica = await musicaDAO.insertMusica(musica)

        if(resultMusica){
            return message.SUCCESS_CREATED_ITEM // 201
        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL//500
        }
    }
    } catch (error) {
        return message.ERROR_INTERNAR_SERVER_CONTROLLER //500
}

}

//Função para atualizar uma musica existente
const atualizarMusica = async function(){
    
}

//Função para excluir uma musica existente
const excluirMusica = async function(){
    
}


//Função para retornar uma lista de músicas
const listarMusica = async function(){
    
}

//Função para buscar uma musica pelo ID
const buscarMusica = async function(){
    
}

module.exports = {
    inserirMusica,
    atualizarMusica,
    excluirMusica,
    listarMusica,
    buscarMusica
}