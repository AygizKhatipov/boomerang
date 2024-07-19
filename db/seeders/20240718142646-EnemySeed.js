/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Enemies',
      [
        {
          name: '👾',
          speed: 1,
        },
        {
          name: '💀',
          speed: 1,
        },
        {
          name: '👹',
          speed: 1,
        },
        {
          name: '👻',
          speed: 2,
        },
        {
          name: '👽',
          speed: 2,
        },
        {
          name: '👿',
          speed: 2,
        },
        {
          name: '💩',
          speed: 2,
        },
        {
          name: '🤡',
          speed: 3,
        },
        {
          name: '🧛',
          speed: 3,
        },
        {
          name: '🧟',
          speed: 3,
        },
        {
          name: '🎃',
          speed: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Enemies', null, {});
  },
};
