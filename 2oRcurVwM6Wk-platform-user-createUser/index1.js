
/**
 * Nome da primitiva : createUser
 * Nome do dominio : platform
 * Nome do serviço : user
 * Nome do tenant : fabcustom
 **/

exports.handler = async (event) => {
  
    //Define variável para recebermos o corpo da requisição
    let body;
    
    
    //Atribui na variável o corpo da requisição fazendo o Parse para JSON caso o event possuir a propriedade body. Isso é necessário para os testes que veremos a seguir.
    if(event.body === undefined) {
        body = event;
    } else {
        body = JSON.parse(event.body);
    }
    
    
    //Valida se no corpo existe a propriedade description, caso positivo devolve com status 200 OK o prórpio corpo,
    //Caso negativo devolve o status 400 - bad Request com a mensagem para o usuário
    if(body.hasOwnProperty('description')){
       return sendRes(200, body);
    } else {
      return sendRes(400, 'Preencher o campo descrição!');
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
