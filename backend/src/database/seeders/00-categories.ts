import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => queryInterface.bulkInsert(
    'categories',
    [
      {
        name: 'Side',
        type: 'Meals'
      },
      {
        name: 'Seafood',
        type: 'Meals'
      },
      {
        name: 'Beef',
        type: 'Meals'
      },
      {
        name: 'Vegetarian',
        type: 'Meals'
      },
      {
        name: 'Pasta',
        type: 'Meals'
      },
      {
        name: 'Pork',
        type: 'Meals'
      },
      {
        name: 'Miscellaneous',
        type: 'Meals'
      },
      {
        name: 'Dessert',
        type: 'Meals'
      },
      {
        name: 'Chicken',
        type: 'Meals'
      },
      {
        name: 'Lamb',
        type: 'Meals'
      },
      {
        name: 'Ordinary Drink',
        type: 'Drinks'
      },
      {
        name: 'Cocktail',
        type: 'Drinks'
      },
      {
        name: 'Shot',
        type: 'Drinks'
      },
      {
        name: 'Punch / Party Drink',
        type: 'Drinks'
      },
      {
        name: 'Coffee / Tea',
        type: 'Drinks'
      }
    ],
  ),
  down: async (queryInterface: QueryInterface) => queryInterface.bulkDelete('categories', {}),
};
