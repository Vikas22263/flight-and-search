'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightsNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      airplaneId: {
        type: Sequelize.INTEGER, // Corrected to INTEGER
        allowNull: false
      },
      departureAirportId: {
        type: Sequelize.INTEGER, // Corrected to INTEGER
        allowNull: false
      },
      arrivalAirportId: {
        type: Sequelize.INTEGER, // Corrected to INTEGER
        allowNull: false
      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      price: {
        type: Sequelize.FLOAT, // Adjust based on your price requirements
        allowNull: false
      },
      boardingGate: {
        type: Sequelize.STRING,
        allowNull: false
      },
      totalSeats: {
        type: Sequelize.INTEGER, // Corrected to INTEGER
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('flights');
  }
};
