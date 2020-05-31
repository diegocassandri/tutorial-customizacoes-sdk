const payload = require('../payload.json');
const employeeSave = require('../indexLib');

employeeSave.handler(payload).then(response => console.log(response));

