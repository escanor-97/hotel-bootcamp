const Sequelize = require('sequelize');
// const { show } = require('./TypeEmployeeController');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const typeEmployee = require('../models').TypeEmployee;
const employee = require('../models').Employee;
const authConfig = require('../config/auth');

module.exports = {
  create(req, res) {
    let { name, lastName, cellphone, email, username, TypeEmployeeId } = req.body;

    let password = bcrypt.hashSync(req.body.password, authConfig.rounds);

    return employee.create({
      name: name,
      lastName: lastName,
      cellphone: cellphone,
      email: email,
      username: username,
      password: password,
      TypeEmployeeId: TypeEmployeeId
    })
      .then(employee => {
        let token = jwt.sign({ employee: employee }, authConfig.secret, {
          expiresIn: authConfig.expires
        });

        res.json({
          employee: employee,
          token: token
        })
        // res.status(200).send(employee)
      })
      .catch(error => res.status(400).send(error));
  },
  show(_, res) {
    return employee.findAll({
      include: [{ model: typeEmployee }]
    })
      .then(employee => res.status(200).send(employee))
      .catch(error => res.status(400).send(error));
  },


  singIn(req, res) {
    let { username, password } = req.body;
    return employee.findOne({
      where: { username: username }
    }).then(employee => {
      if (!employee) {
        res.status(404).json({ msg: "Usuario con este correo no encontrado" });
      } else {
        if (bcrypt.compareSync(password, employee.password)) {

          // Creamos el token
          let token = jwt.sign({ employee: employee }, authConfig.secret, {
            expiresIn: authConfig.expires
          });

          res.json({
            employee: employee,
            token: token
          })

        } else {

          // Unauthorized Access
          res.status(401).json({ msg: "Contraseña incorrecta" })
        }

      }
    })
  }

}

