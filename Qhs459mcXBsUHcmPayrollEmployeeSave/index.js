const {
    lambdaEvent,
    lambdaResponse,
    AsyncRuleValidator
} = require('@seniorsistemas/fsw-aws-lambda');

const dataValidation = require('./src/rules/dataValidation');

exports.handler = async event => {
    event.environment = 'homologx';
    const body = lambdaEvent.parseBody(event);
    const eventInfo = lambdaEvent.createEventInfo(event);
    
    return new AsyncRuleValidator(body,eventInfo)
        .validate([
            dataValidation
        ])
        .then(validationResult => {
            if(validationResult.hasErrors()) {
                return lambdaResponse.validationError(validationResult.getErrorsAsString());
            }

            return lambdaResponse.success(body);
        })
        .catch(lambdaResponse.internalError);
}