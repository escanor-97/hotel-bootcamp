const typeEmployeeController = require('../controller/TypeEmployeeController');
const employeeController = require('../controller/EmployeeController')

module.exports = (app) => {
  app.get('/api', (req, res) => {
    res.status(200).send({ status: 'ok', message: 'API Service Hotel 0.0.1 ready to work!' });
  });

  // app.post('/api/typeEmployee/create/name/:name', typeEmployeeController.create);

  app.post('/api/typeEmployees/', typeEmployeeController.create);
  app.get('/api/typeEmployees/', typeEmployeeController.show);
  app.get('/api/typeEmployees/:id', typeEmployeeController.showById);
  app.put('/api/typeEmployees/:id', typeEmployeeController.update);

  app.post('/api/employees/', employeeController.create);
  app.get('/api/employees/', employeeController.show);
}