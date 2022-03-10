const Sequelize = require('sequelize');
// const { show } = require('./TypeEmployeeController');
const typeEmployee = require('../models').TypeEmployee;
const employee = require('../models').Employee;

module.exports = {
  create(req, res) {
    let { name, lastName, cellphone, email, username, password, TypeEmployeeId } = req.body;
    return employee.create({
      name: name,
      lastName: lastName,
      cellphone: cellphone,
      email: email,
      username: username,
      password: password,
      TypeEmployeeId: TypeEmployeeId
    })
      .then(employee => res.status(200).send(employee))
      .catch(error => res.status(400).send(error));
  },
  show(_, res) {
    return employee.findAll({
      include: [{ model: typeEmployee }]
    })
      .then(employee => res.status(200).send(employee))
      .catch(error => res.status(400).send(error));
  }
}

