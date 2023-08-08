import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        username: 'user',
        email: 'user@example.com',
        password: 'user',
        activationCode: 'user',
        activated: true
      },
      {
        username: 'inactiveUser',
        email: 'inactiveUser@example.com',
        password: 'inactiveUser',
        activationCode: 'inactiveUser',
        activated: false
      }
    ]);
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  }
};