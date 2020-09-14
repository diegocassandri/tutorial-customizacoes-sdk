
/**
 * Nome da primitiva : createMergeDismissalMovimentation
 * Nome do dominio : hcm
 * Nome do serviço : payroll
 * Nome do tenant : trn36294296
 **/
 
const axios = require('axios');

exports.handler = async event => {
  let body = parseBody(event);
  let tokenSeniorX = event.headers['X-Senior-Token'];
  
  const instance = axios.create({
    baseURL: 'https://platform-homologx.senior.com.br/t/senior.com.br/bridge/1.0/rest/',
    headers: {
      'Authorization': tokenSeniorX
    }
  });

  //Id do colaborador 
  let employeeId = body.employee.id;
  
  //busca informações do colaborador
  let response = await instance.get(`/hcm/payroll/entities/employee/${employeeId}`);
  
  let employee = response.data;
  
  if(employee.custom) {
    if(employee.custom.USU_CARCOF === 'S') {
      return sendRes(400,'Não é permitido programar desligamento para colaboradores com cargo de confiança!');
    }
  }
  
  /*Caso todas as validações passem*/
  return sendRes(200,body);
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
  