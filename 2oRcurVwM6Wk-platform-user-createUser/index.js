
/**
 * Nome da primitiva : createUser
 * Nome do dominio : platform
 * Nome do serviço : user
 * Nome do tenant : fabcustom
 **/


const axios = require('axios'); //Aqui importamos a biblioteca instalada

exports.handler = async (event) => {
  
    //Define variável para recebermos o corpo da requisição
    let body;
    let tokenSeniorX = 'Bearer 69e341d8f3caf06596b884ea8a7f7888'; // Token utilizado para testes 
    
    
    //Atribui na variável o corpo da requisição fazendo o Parse para JSON caso o event possuir a propriedade body. Isso é necessário para os testes que veremos a seguir.
    if(event.body === undefined) {
        body = event;
    } else {
        body = JSON.parse(event.body);
        tokenSeniorX = event.headers['X-Senior-Token']; //Caso for uma chamada da plaforma busca o token do Header da requisição 
    }
    
    
    //Exemplo de chamada HTTP para primitiva da plataforma

    if(body.hasOwnProperty('description')){
       return sendRes(200, body);
    } else {
      
      let user = await obterDadosUser(tokenSeniorX);
      
      body.description = `Usuário criado por:  ${user.fullName}`;
      
      return sendRes(200, body);
    }
  
    
};

const obterDadosUser = async (tokenSeniorX) => {
  
    //Variável que receberá o retorno da chamada
    let vResponse;
    
    //Configura o cabeçalho da requisição
    let headersConfig = {
      headers: { 
        "Authorization" : tokenSeniorX
      }
    };
    
    //Realiza a chamada, passando a URL e o cabeçalho
    try {
      vResponse = await axios.get('https://platform-homologx.senior.com.br/t/senior.com.br/bridge/1.0/rest/platform/user/queries/getUser', headersConfig);
      
      //Caso sucesso retorna o corpo da requisição
      return vResponse.data;
    } catch (e) {
        //Caso erro retorna erro para o usuário
        return sendRes(400,'Erro ao realizar chamada HTTP!');
    }
    
};

const sendRes = (status, body) => {

  var response = {
    statusCode: status,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };
  return response;
};

