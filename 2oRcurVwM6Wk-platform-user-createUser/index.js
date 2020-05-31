/**
 * Nome da primitiva : createUser
 * Nome do dominio : platform
 * Nome do serviço : user
 * Nome do tenant : fabcustom
 * Objetivo: Valida se o campo descrição do usuário foi preenchido, se não inclui na existente o nome do usuário que o criou esse novo usuário.
*/
const axios = require('axios'); //Aqui importamos a biblioteca instalada

exports.handler = async (event) => {
    //Define variável para recebermos o corpo da requisição
    let body = parseBody(event);

    //Cria instância e  configura o cabeçalho da requisição
    const instance = axios.create({
        baseURL: 'https://platform-homologx.senior.com.br/t/senior.com.br/bridge/1.0/rest/',
        headers: {
          'Authorization': event.headers['X-Senior-Token']
          
        }
    });

    if(!!body.description){
       return sendRes(200, body);
    } else {
      let user = await obterDadosUser(instance);
      
      body.description = `Usuário criado por:  ${user.fullName}`;
      
      return sendRes(200, body);
    }
};

const obterDadosUser = async (instance) => {
  let vResponse;

    //Realiza a chamada, passando a URL e o cabeçalho
    try {
      vResponse = await instance.get('/platform/user/queries/getUser');
      
      //Caso sucesso retorna o corpo da requisição
      return vResponse.data;
    } catch (e) {
        //Caso erro retorna erro para o usuário
        return sendRes(400,'Erro ao realizar chamada HTTP!');
    }
};

const parseBody = (event) => {
  return typeof event.body === 'string' ?  JSON.parse(event.body) : event.body || {};
};

const sendRes = (status, body) => {
  var response = {
    statusCode: status,
    headers: {
      "Content-Type": "application/json"
    },
   body: typeof body === 'string' ? body : JSON.stringify(body) 
  };
  return response;
};



