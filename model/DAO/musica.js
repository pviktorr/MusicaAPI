/**************************************************************
 * Objetivo : Criar o CRUD de dados da tabela de musica no banco de dados 
 * Data : 11/02/2025
 * Autor : Marcel
 * Versão : 1.0  
***************************************************************/
//Import da biblioteca do prisma client para realizar as ações no Banco de Dados 
const {prismaClient, PrismaClient} = require ('@prisma/client')
//Instancia da classe do prisma client(cria um objeto)
const prisma = new PrismaClient()

//Função para inserir uma nova musica 
const insertMusica = async function (musica){
    try {  
    
    
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
        return false  //Bug do BD
    
    } catch (error) {
        console.log(error)
        return false //Bug de Programação 
    }

}
//Função para atualizar um musica existente
const updateMusica = async function () {
    
}
//Função para excluir uma musica 
const deleteMusica = async function () {
    
}
//Função para retornar todas as musicas no banco de dados 
const selectAllMusica = async function () {
    try {
        let sql = 'select * from tbl_musica order by id desc'
//Encaminha o script sql para o BD 
        let result = await prisma.$queryRawUnsafe(sql)
        
        if(result)
            return result//Retorna os dados do Banco
        else 
        return false

    } catch (error) {
        return false
    }
}
//Função para listar uma musica pelo id 
const selectByIdMusica = async function (ID) {
    try {
        let sql = `select * from tbl_musica where id = ${ID}`
        //Encaminha o script sql para o BD 

                let result = await prisma.$queryRawUnsafe(sql)
                
                if(result)
                    return result//Retorna os dados do Banco
                else 
                return false
        
    } catch (error) {
        return false 
    }
}

module.exports = {
    
    insertMusica,
    updateMusica,
    deleteMusica, 
    selectAllMusica, 
    selectByIdMusica

}
