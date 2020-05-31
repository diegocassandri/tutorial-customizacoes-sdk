const payload = require('../payload.json');
const employeeSave = require('../index');

employeeSave.handler(payload).then(response => console.log(response));

