import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        username: 'user',
        email: 'user@example.com',
        password: '$2a$10$mX0T/HtujfFcAVKrK5aMY.YjIxbAmgBRBnfcf71iFUjujCJuONzhu',
        // password: 'userPassword',
        activation_code: 'user',
        activated: true
      },
      {
        username: 'inactiveUser',
        email: 'inactiveUser@example.com',
        // password: 'inactiveUserPassword',
        password: '$2a$10$5F8I8yE7BdIOnkegNUaXYeMwAC/SxFeafr1vDBJtS1U7h0Xd1.ozC',
        activation_code: 'inactiveUser',
        activated: false
      }
    ]);
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  }
};