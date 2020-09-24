
/**
 * Nome da primitiva : enumQuery
 * Nome do dominio : hcm
 * Nome do serviço : payroll
 * Nome do tenant : trn36294296
 **/

exports.handler = async (event) => {
    let body = parseBody(event);

   //Retira valor 999 da lista de categoria eSocial
   
   if(body.results) {
      if(body.results[0].enumName === 'ESocialCategory') {
      
        body.results[0].items = body.results[0].items.filter(element => {
           return element.key !== 'Category_999';
        });
      }
   }

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
  