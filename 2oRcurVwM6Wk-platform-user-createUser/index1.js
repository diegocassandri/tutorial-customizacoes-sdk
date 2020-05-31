/**
 * Nome da primitiva : createUser
 * Nome do dominio : platform
 * Nome do serviço : user
 * Nome do tenant : fabcustom
 */

exports.handler = async (event) => {
    //Define variável para recebermos o corpo da requisição
    let body = parseBody(event);
    
    //Valida se no corpo existe a propriedade description, caso positivo devolve com status 200 OK o prórpio corpo, Caso negativo devolve o status 400 - bad Request com a mensagem para o usuário
    return !!body.description ? sendRes(200, body) : sendRes(400, 'Preencher o campo descrição!');
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