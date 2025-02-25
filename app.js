/***********************************************************************************
 *  Data 11/02/24 
 * Autor : Pedro Victor
 * 
 *** Para criar a API precisa instalar :
 *      express        npm install express
 *      cors           npm install cors
 *       body-parser   npm install body-parser
 *** Para criar a conexão com banco de dados precisa instalar:
 *      prisma  npm install prisma 
 *      @prisma/client npm install @prisma/client
 * 
 * Após a instalção do prisma e @prisma/client devemos: 
 *      npx prisma init ->  para inicializar o prisma no projeto 
 * Após o comando acima, voce deverá configurar o .ev e o schema.prisma, e rodas o comando :
 *      npx prisma migrate dev
 * *********************************************************************************/ 

 const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Cria um objeto para o body do tipo JSON
const bodyParserJSON = bodyParser.json()

//Cria um objeto para criar a API
const app = express()

const controllerMusica = require ('./controller/musica/controllerMusica.js')

app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin','*')
    response.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE,OPTIONS')

    app.use(cors())

    next()
})
//Endpoint para inserir musicas
app.post('/v1/controle-musicas/musica', cors(), bodyParserJSON, async function (request, response) {
    //Recebe o content-type da requisição 
   let contentType = request.headers['content-type']
    //Recebe os dados da requisição 
    let dadosBody = request.body

    //Chama função da controller para inserir os dados e aguarda o retorno da função 
    let resultMusica = await controllerMusica.inserirMusica(dadosBody,contentType)
    response.status(resultMusica.status_code)
    response.json(resultMusica)

})

app.get('/v1/controle-musicas/musica', cors(), bodyParserJSON, async function (request, response) {
    let resultMusica = await controllerMusica.listarMusica()

    response.status(resultMusica.status_code)
    response.json(resultMusica)
})

app.listen(8080, function(){
    console.log('API aguardando requisições...')
})


