/**************************************************************
 * Objetivo : Criar o CRUD de dados da tabela de musica no banco de dados 
 * Data : 11/02/2025
 * Autor : Marcel
 * Versão : 1.0  
***************************************************************/
//Import da biblioteca do prisma client para realizar as ações no Banco de Dados 
const {prismaClient, PrismaClient} = require ('@prisma/client')

//Função para inserir uma nova musica 
const insertMusica = async function (musica){
    //Instancia da classe do prisma client(cria um objeto)
    const prisma = new PrismaClient()
let sql = ` insert into tbl_musica (nome, 
                         duracao, 
                         data_lancamento,
                         letra,
                         link )
                         values(
                                '${musica.nome}',
                                '${musica.duracao}',
                                '${musica.data_lancamento}',
                                '${musica.letra}',
                                '${musica.link}'
                          )`
//Executa o script SQL no banco de dados e aguarda o resultado (true ou false)
let result = await prisma.$executeRawUnsafe(sql)

if(result)
    return true
else 
return false  
}
//Função para atualizar um musica existente
const updateMusica = async function () {
    
}
//Função para excluir uma musica 
const deleteMusica = async function () {
    
}
//Função para retornar todas as musicas no banco de dados 
const selectAllMusica = async function () {
    
}
//Função para listar uma musica pelo id 
const selectByIdMusica = async function () {
    
}

module.exports = {
    insertMusica,
    updateMusica,
    deleteMusica, 
    selectAllMusica, 
    selectByIdMusica

}
