import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        username: 'user',
        email: 'user@example.com',
        password: 'user',
        activation_code: 'user',
        activated: true
      },
      {
        username: 'inactiveUser',
        email: 'inactiveUser@example.com',
        password: 'inactiveUser',
        activation_code: 'inactiveUser',
        activated: false
      }
    ]);
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  }
};