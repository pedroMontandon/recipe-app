import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => queryInterface.bulkInsert(
    'areas',
    [
      {
        name: 'Turkish'
      },
      {
        name: 'Croatian'
      },
      {
        name: 'Japanese'
      },
      {
        name: 'Filipino'
      },
      {
        name: 'Egyptian'
      },
      {
        name: 'Tunisian'
      },
      {
        name: 'Italian'
      },
      {
        name: 'Indian'
      },
      {
        name: 'Chinese'
      },
      {
        name: 'Canadian'
      },
      {
        name: 'American'
      },
      {
        name: 'Dutch'
      },
      {
        name: 'British'
      },
      {
        name: 'French'
      },
      {
        name: 'Greek'
      },
      {
        name: 'Malaysian'
      }
    ],
  ),
  down: async (queryInterface: QueryInterface) => queryInterface.bulkDelete('areas', {}),
};
