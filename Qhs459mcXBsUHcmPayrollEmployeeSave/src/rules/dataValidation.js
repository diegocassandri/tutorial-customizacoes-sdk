const { PlatformApi } = require('@seniorsistemas/fsw-aws-lambda');

const { employeeService } = require('@seniorsistemas/fsw-aws-lambda/services');

module.exports = async (body,event) => {
    //Valida tamanho do apelido
    if(body.sheetPersona.nickname){
        if(body.sheetPersona.nickname.length > 10) {
            return 'O apelido teve ter até 10 caracteres!';
        }
    } else {
        return 'O apelido deve ser informado!';
    }

    //Valida se a foto do colaborador está presente
    if(!body.sheetPersona.attachment){
        return 'A foto do colaborador deve ser informada!';
    } 

    
    //Não permite alteração de CPF
    if(body.sheetInitial.employee) {
        let employeeId = body.sheetInitial.employee.tableId;
        //let employee = await PlatformApi.Get(event,`/hcm/payroll/entities/employee/${employeeId}`);
        let employee = await employeeService.findEmployee(event,employeeId);

        if(employee.person.cpf !== body.sheetDocument.cpfNumber){
            return 'Não é permitido alterar o CPF do Colaborador!';
        }
    }

    //Valida Range de Escalas para Tipo de Contrato empregado
    if((body.sheetInitial.contractType.key === 'Employee') && (body.sheetWorkSchedule.workshift.tableId)){
        try {
            let workshiftResponse = await PlatformApi.Get(event,`/hcm/payroll/entities/workshift/${body.sheetWorkSchedule.workshift.tableId}`);
            
            if((workshiftResponse.code >= 5) && (workshiftResponse.code <= 10) ) {
                return 'Range de escala não permitido para Empregados!';
            }

        } catch (error) {
            return error.message;
        }
    }

    //Valida se o PIS informando já está em uso por outro colaborador ativo 
    if(body.sheetDocument.pisNumber) {
        let nisBody = {
            numberNis: body.sheetDocument.pisNumber,
            referenceDate: body.sheetDocument.hireDate,
            personId: (body.sheetInitial.person.tableId != 'new') ? body.sheetInitial.person.tableId : null
        };
        try {
            let alreadyThisNisResponse = await PlatformApi.Post(event,'/hcm/payroll/queries/personAlreadyThisNis',nisBody);
            if(alreadyThisNisResponse.result.ok) {
                return alreadyThisNisResponse.result.message;    
            } 
        } catch(error) {
            return error.message;
        }
    } 
};
