
/**
 * Nome da primitiva : updateUser
 * Nome do dominio : platform
 * Nome do serviço : user
 * Nome do tenant : fabcustom
 **/



//Importação dos utilizatios da biblioteca
const {lambdaEvent, lambdaResponse, AsyncRuleValidator} = require('fab-lambda-lib');

exports.handler = async (event,context) => {
  
  const body = lambdaEvent.parseBody(event);
  const eventInfo = lambdaEvent.createEventInfo(event);
  
  return new AsyncRuleValidator(body,eventInfo)
      .validate([
          'blockUser'
        ])
        .then(validationResult => {
        if (validationResult.hasErrors()) {
                return lambdaResponse.validationError(validationResult.getErrorsAsString());
            }

            return lambdaResponse.success(body);
      })
      .catch(lambdaResponse.internalError());
};

