'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airplanes',[
    {modelNumber:"Boeing 267",
      capacity:200,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {modelNumber:"tejas",
      capacity:50,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {modelNumber:"Boeing 777",
      capacity:200,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {modelNumber:"Spicejet 267",
      capacity:500,
      createdAt:new Date(),
      updatedAt:new Date()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
