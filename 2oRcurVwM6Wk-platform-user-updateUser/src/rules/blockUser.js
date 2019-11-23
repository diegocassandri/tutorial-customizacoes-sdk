// Realiza importação do serviço
const userRolesService = require('./../services/userRolesService');


//recebe o body do serviço e todas as informações da execução
module.exports = async (body,event) => {
    
    //Armazena o nome do usuário que está sendo alterado
    const username = body.username;
    
    //Realiza a chamada do serviço 
    //Se o retorno do serviço for verdadeiro e se o atributo blocked existir no corpo então retorna a mensagem de validação
    if((await userRolesService.validateRoles(event,username)) && body.blocked) {
       return 'Você não pode bloquear um usuário Administrador!';  
    } 
    
    return null;
};