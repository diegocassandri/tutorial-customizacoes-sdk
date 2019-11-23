/**
 * Nome da primitiva : updateUser
 * Nome do dominio : platform
 * Nome do serviço : user
 * Nome do tenant : fabcustom
 **/
//Importação dos utilitários da biblioteca
const {lambdaEvent, lambdaResponse, AsyncRuleValidator} = require('fab-lambda-lib');
//Recebe o evento e o contexto da requisição feita pela plataforma
exports.handler = async (event,context) => {
  
  //parseia o corpo da requisição de acordo com o tipo de chamada (testes ou chamda http)
  const body = lambdaEvent.parseBody(event);
  //cria objeto contendo o evento e informções do ambiente de execução (dev, homologação ou proução)
  const eventInfo = lambdaEvent.createEventInfo(event);
  
  //Realizar a chamada do método que executa as validações de negócios da função
  //No método validate passamos o nome dos arquivos possuem as implementações das regras de negócio a serem validadas
  //Aqui podemos ser passadas quantas validações forem necessárias, as mesmas vão rodar em paralelo assincronamente
  return new AsyncRuleValidator(body,eventInfo)
      .validate([
          'blockUser'
        ])
        .then(validationResult => {
          
          //Trata erros de execução
        if (validationResult.hasErrors()) {
            return lambdaResponse.validationError(validationResult.getErrorsAsString());
        }
        // Retorna o corpo recebedido se as validaçoes passaram
        return lambdaResponse.success(body);
      })
      .catch(lambdaResponse.internalError());
};

