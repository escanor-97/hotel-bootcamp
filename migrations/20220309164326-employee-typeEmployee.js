'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Employees', {
      fields: ['TypeEmployeeId'],
      type: 'foreign key',
      name: 'employees_typeEmployee',
      references: {
        table: 'TypeEmployees',
        field: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Employees', 'employees_typeEmployee')
  }
};
