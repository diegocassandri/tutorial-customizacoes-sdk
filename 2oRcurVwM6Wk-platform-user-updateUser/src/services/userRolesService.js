//Importa as blibliotecas momonent,axios e o utilizario http da biblioteca fab-lambda-lib
const AxiosWrapper = require('fab-lambda-lib').AxiosWrapper;
const axiosW = new AxiosWrapper(require('axios').default);

//recebdo o event e o nome do usuário que está sendo alterado
async function validateRoles(event, user) {
    
    //armazena o resutado do métdo que busca os perfis do usuário
    let userRoles = await findRoles(event,user);
    
    //percorre e filtra os perfis retornando apenas os que possuem nome como admin
    userRoles = userRoles.roles.filter(role => {
        return role.name === 'admin';
    }); 
    
    //se o array possuir valores quer dizer que o usuário está no grupo admin
    if(userRoles.length !== 0){
       return true;
    }
    
    //caso contrário devolde false
    return false;
}

function findRoles (event, user) {
   //realiza a chamada http para a plataforma, passando como parâmetro a utl, event e o nome do usuário no corpo da requisição
    return axiosW.platformPost('/platform/authorization/queries/getUserDetailRoles',event, {user});
}

module.exports = {
    validateRoles
};