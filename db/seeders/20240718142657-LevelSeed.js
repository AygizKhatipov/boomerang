

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Levels',
      [
        {
          id_enemy: 1,
        },
        {
          id_enemy: 2,
        },
        {
          id_enemy: 3,
        },
        {
          id_enemy: 4,
        },
        {
          id_enemy: 5,
        },
        {
          id_enemy: 6,
        },
        {
          id_enemy: 7,
        },
        {
          id_enemy: 8,
        },
        {
          id_enemy: 9,
        },
        {
          id_enemy: 10,
        },
        {
          id_enemy: 11,
        },

      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Levels', null, {});
  },
};
