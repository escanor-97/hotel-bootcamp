const Sequelize = require('sequelize');

const typeEmployee = require('../models').TypeEmployee;

module.exports = {
  create(req, res) {
    let { name } = req.body;
    return typeEmployee.create({
      name: name
    })
      .then(typeEmployee => res.status(200).send(typeEmployee))
      .catch(error => res.status(400).send(error));
  },
  show(_, res) {
    return typeEmployee.findAll({})
      .then(typeEmployee => res.status(200).send(typeEmployee))
      .catch(error => res.status(400).send(error));
  },
  showById(req, res) {
    let { id } = req.params;
    return typeEmployee.findOne({ where: { id: id } })
      .then(typeEmployee => res.status(200).send(typeEmployee))
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    let { id } = req.params;
    let { name } = req.body;
    return typeEmployee.update(
      {
        name: name
      },
      { where: { id: id } }
    )
      .then(typeEmployee => res.status(200).send(typeEmployee))
      .catch(error => res.status(400).send(error));
  },
  delete(req, res) {
    let { id } = req.params;
    // let { name } = req.body;
    return typeEmployee.destroy(
      { where: { id: id } }
    )
      .then(typeEmployee => res.status(200).send(typeEmployee))
      .catch(error => res.status(400).send(error));
  }
}
