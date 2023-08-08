import { QueryInterface } from 'sequelize';

export default {
  up: (queryInterface: QueryInterface) => queryInterface.bulkInsert(
    'ingredients_recipes',
    [
      {
        recipe_id: 1,
        ingredient_id: 1,
        measure: '1 cup '
      },
      {
        recipe_id: 1,
        ingredient_id: 2,
        measure: '1 large'
      },
      {
        recipe_id: 1,
        ingredient_id: 3,
        measure: '1 large'
      },
      {
        recipe_id: 1,
        ingredient_id: 4,
        measure: '1 tbs'
      },
      {
        recipe_id: 1,
        ingredient_id: 5,
        measure: '2 tsp'
      },
      {
        recipe_id: 1,
        ingredient_id: 6,
        measure: '1 tsp '
      },
      {
        recipe_id: 1,
        ingredient_id: 7,
        measure: '1/2 tsp'
      },
      {
        recipe_id: 1,
        ingredient_id: 8,
        measure: '1/2 tsp'
      },
      {
        recipe_id: 1,
        ingredient_id: 9,
        measure: '1/4 tsp'
      },
      {
        recipe_id: 1,
        ingredient_id: 10,
        measure: '1/4 tsp'
      },
      {
        recipe_id: 1,
        ingredient_id: 11,
        measure: '4 cups '
      },
      {
        recipe_id: 1,
        ingredient_id: 12,
        measure: '1 cup '
      },
      {
        recipe_id: 1,
        ingredient_id: 13,
        measure: 'Pinch'
      },
      {
        recipe_id: 2,
        ingredient_id: 14,
        measure: '1 Packet'
      },
      {
        recipe_id: 2,
        ingredient_id: 15,
        measure: '150g'
      },
      {
        recipe_id: 2,
        ingredient_id: 2,
        measure: '150g'
      },
      {
        recipe_id: 2,
        ingredient_id: 16,
        measure: '40g'
      },
      {
        recipe_id: 2,
        ingredient_id: 17,
        measure: 'Dash'
      },
      {
        recipe_id: 2,
        ingredient_id: 18,
        measure: 'Dash'
      },
      {
        recipe_id: 3,
        ingredient_id: 19,
        measure: '300ml '
      },
      {
        recipe_id: 3,
        ingredient_id: 20,
        measure: '100ml'
      },
      {
        recipe_id: 3,
        ingredient_id: 21,
        measure: '2 tbs'
      },
      {
        recipe_id: 3,
        ingredient_id: 22,
        measure: '3 tbs'
      },
      {
        recipe_id: 3,
        ingredient_id: 20,
        measure: '1 tbs'
      },
      {
        recipe_id: 3,
        ingredient_id: 23,
        measure: '1 tbs'
      },
      {
        recipe_id: 3,
        ingredient_id: 24,
        measure: '1'
      },
      {
        recipe_id: 4,
        ingredient_id: 25,
        measure: '2 large'
      },
      {
        recipe_id: 4,
        ingredient_id: 26,
        measure: '2 tbs'
      },
      {
        recipe_id: 4,
        ingredient_id: 27,
        measure: '150g'
      },
      {
        recipe_id: 4,
        ingredient_id: 2,
        measure: '1 large'
      },
      {
        recipe_id: 4,
        ingredient_id: 28,
        measure: '1 large'
      },
      {
        recipe_id: 4,
        ingredient_id: 29,
        measure: 'Pinch'
      },
      {
        recipe_id: 5,
        ingredient_id: 30,
        measure: '1 lb'
      },
      {
        recipe_id: 5,
        ingredient_id: 23,
        measure: '5 tablespoons'
      },
      {
        recipe_id: 5,
        ingredient_id: 31,
        measure: '1'
      },
      {
        recipe_id: 5,
        ingredient_id: 32,
        measure: '3 cloves'
      },
      {
        recipe_id: 5,
        ingredient_id: 2,
        measure: '3 parts '
      },
      {
        recipe_id: 5,
        ingredient_id: 33,
        measure: '4 tbs'
      },
      {
        recipe_id: 5,
        ingredient_id: 12,
        measure: '1 cup '
      },
      {
        recipe_id: 5,
        ingredient_id: 17,
        measure: '1 pinch'
      },
      {
        recipe_id: 6,
        ingredient_id: 34,
        measure: '3 cups '
      },
      {
        recipe_id: 6,
        ingredient_id: 35,
        measure: '6'
      },
      {
        recipe_id: 6,
        ingredient_id: 36,
        measure: '4'
      },
      {
        recipe_id: 6,
        ingredient_id: 37,
        measure: '1/4 cup'
      },
      {
        recipe_id: 6,
        ingredient_id: 5,
        measure: '2 tsp'
      },
      {
        recipe_id: 6,
        ingredient_id: 38,
        measure: '1 tsp '
      },
      {
        recipe_id: 6,
        ingredient_id: 39,
        measure: '1/2 tsp'
      },
      {
        recipe_id: 6,
        ingredient_id: 40,
        measure: 'Spinkling'
      },
      {
        recipe_id: 6,
        ingredient_id: 41,
        measure: 'As required'
      },
      {
        recipe_id: 7,
        ingredient_id: 25,
        measure: '5 Large'
      },
      {
        recipe_id: 7,
        ingredient_id: 33,
        measure: '2 tbs'
      },
      {
        recipe_id: 7,
        ingredient_id: 42,
        measure: '1'
      },
      {
        recipe_id: 7,
        ingredient_id: 43,
        measure: '5'
      },
      {
        recipe_id: 7,
        ingredient_id: 44,
        measure: '1 tbs'
      },
      {
        recipe_id: 7,
        ingredient_id: 45,
        measure: '500g'
      },
      {
        recipe_id: 7,
        ingredient_id: 46,
        measure: '24 Skinned'
      },
      {
        recipe_id: 7,
        ingredient_id: 17,
        measure: 'Pinch'
      },
      {
        recipe_id: 7,
        ingredient_id: 18,
        measure: 'Pinch'
      },
      {
        recipe_id: 8,
        ingredient_id: 33,
        measure: '1 tblsp '
      },
      {
        recipe_id: 8,
        ingredient_id: 47,
        measure: '2'
      },
      {
        recipe_id: 8,
        ingredient_id: 2,
        measure: '1 finely chopped '
      },
      {
        recipe_id: 8,
        ingredient_id: 48,
        measure: '1 Stick'
      },
      {
        recipe_id: 8,
        ingredient_id: 3,
        measure: '1 medium'
      },
      {
        recipe_id: 8,
        ingredient_id: 32,
        measure: '2 cloves chopped'
      },
      {
        recipe_id: 8,
        ingredient_id: 15,
        measure: '500g'
      },
      {
        recipe_id: 8,
        ingredient_id: 4,
        measure: '1 tbls'
      },
      {
        recipe_id: 8,
        ingredient_id: 49,
        measure: '800g'
      },
      {
        recipe_id: 8,
        ingredient_id: 50,
        measure: '1 tblsp '
      },
      {
        recipe_id: 8,
        ingredient_id: 51,
        measure: '500g'
      },
      {
        recipe_id: 8,
        ingredient_id: 52,
        measure: '400ml'
      },
      {
        recipe_id: 8,
        ingredient_id: 53,
        measure: '125g'
      },
      {
        recipe_id: 8,
        ingredient_id: 54,
        measure: '50g'
      },
      {
        recipe_id: 8,
        ingredient_id: 55,
        measure: 'Topping'
      },
      {
        recipe_id: 9,
        ingredient_id: 56,
        measure: '1 cup'
      },
      {
        recipe_id: 9,
        ingredient_id: 12,
        measure: '2-1/2 cups'
      },
      {
        recipe_id: 9,
        ingredient_id: 17,
        measure: '1 tsp'
      },
      {
        recipe_id: 9,
        ingredient_id: 57,
        measure: '1/4 tsp'
      },
      {
        recipe_id: 9,
        ingredient_id: 58,
        measure: '3 tbs'
      },
      {
        recipe_id: 9,
        ingredient_id: 59,
        measure: '1 cup'
      },
      {
        recipe_id: 9,
        ingredient_id: 60,
        measure: '1/2 tsp'
      },
      {
        recipe_id: 9,
        ingredient_id: 61,
        measure: '1/2 tsp'
      },
      {
        recipe_id: 9,
        ingredient_id: 62,
        measure: '2'
      },
      {
        recipe_id: 9,
        ingredient_id: 63,
        measure: '1 tbs chopped'
      },
      {
        recipe_id: 9,
        ingredient_id: 64,
        measure: '2 tsp shredded'
      },
      {
        recipe_id: 9,
        ingredient_id: 65,
        measure: '2 tbs '
      },
      {
        recipe_id: 9,
        ingredient_id: 28,
        measure: '1/2 tsp'
      },
      {
        recipe_id: 9,
        ingredient_id: 17,
        measure: '1/2 tsp'
      },
      {
        recipe_id: 9,
        ingredient_id: 66,
        measure: '1 tsp'
      },
      {
        recipe_id: 9,
        ingredient_id: 67,
        measure: '1/4 tsp'
      },
      {
        recipe_id: 10,
        ingredient_id: 68,
        measure: '1lb'
      },
      {
        recipe_id: 10,
        ingredient_id: 36,
        measure: '3 chopped'
      },
      {
        recipe_id: 10,
        ingredient_id: 64,
        measure: '1 tsp '
      },
      {
        recipe_id: 10,
        ingredient_id: 23,
        measure: '1 tbs'
      },
      {
        recipe_id: 10,
        ingredient_id: 69,
        measure: '1 tsp '
      },
      {
        recipe_id: 10,
        ingredient_id: 3,
        measure: '3 finely chopped'
      },
      {
        recipe_id: 10,
        ingredient_id: 48,
        measure: '3 finely chopped'
      },
      {
        recipe_id: 10,
        ingredient_id: 35,
        measure: '6 chopped'
      },
      {
        recipe_id: 10,
        ingredient_id: 70,
        measure: '1 Packet'
      },
      {
        recipe_id: 10,
        ingredient_id: 16,
        measure: 'Fry'
      },
      {
        recipe_id: 10,
        ingredient_id: 12,
        measure: 'Bottle'
      },
      {
        recipe_id: 11,
        ingredient_id: 41,
        measure: 'Dash'
      },
      {
        recipe_id: 11,
        ingredient_id: 71,
        measure: '1 Can'
      },
      {
        recipe_id: 11,
        ingredient_id: 25,
        measure: '5 thin cut'
      },
      {
        recipe_id: 11,
        ingredient_id: 72,
        measure: '2 cups'
      },
      {
        recipe_id: 12,
        ingredient_id: 40,
        measure: '2 cups '
      },
      {
        recipe_id: 12,
        ingredient_id: 66,
        measure: '1/3 cup'
      },
      {
        recipe_id: 12,
        ingredient_id: 38,
        measure: '3 tsp'
      },
      {
        recipe_id: 12,
        ingredient_id: 17,
        measure: '½ tsp'
      },
      {
        recipe_id: 12,
        ingredient_id: 73,
        measure: '1 beaten'
      },
      {
        recipe_id: 12,
        ingredient_id: 74,
        measure: '¾ cup'
      },
      {
        recipe_id: 12,
        ingredient_id: 16,
        measure: '3 tbs'
      },
      {
        recipe_id: 12,
        ingredient_id: 16,
        measure: 'for frying'
      },
      {
        recipe_id: 12,
        ingredient_id: 75,
        measure: 'garnish'
      },
      {
        recipe_id: 13,
        ingredient_id: 76,
        measure: '1 1/2 cups '
      },
      {
        recipe_id: 13,
        ingredient_id: 77,
        measure: '1 1/2 cups '
      },
      {
        recipe_id: 13,
        ingredient_id: 78,
        measure: '1/2 tsp'
      },
      {
        recipe_id: 13,
        ingredient_id: 79,
        measure: '2 cups '
      },
      {
        recipe_id: 13,
        ingredient_id: 80,
        measure: 'Can'
      },
      {
        recipe_id: 13,
        ingredient_id: 2,
        measure: '1 large'
      },
      {
        recipe_id: 13,
        ingredient_id: 17,
        measure: 'Sprinking'
      },
      {
        recipe_id: 13,
        ingredient_id: 41,
        measure: '1/2 cup '
      },
      {
        recipe_id: 14,
        ingredient_id: 15,
        measure: '400g'
      },
      {
        recipe_id: 14,
        ingredient_id: 33,
        measure: '2 tbs'
      },
      {
        recipe_id: 14,
        ingredient_id: 81,
        measure: '2'
      },
      {
        recipe_id: 14,
        ingredient_id: 2,
        measure: 'Chopped'
      },
      {
        recipe_id: 14,
        ingredient_id: 82,
        measure: '1/4 '
      },
      {
        recipe_id: 14,
        ingredient_id: 27,
        measure: '2 sliced'
      },
      {
        recipe_id: 14,
        ingredient_id: 83,
        measure: '2 large'
      },
      {
        recipe_id: 14,
        ingredient_id: 22,
        measure: '1 cup '
      },
      {
        recipe_id: 14,
        ingredient_id: 84,
        measure: '2 tsp'
      },
      {
        recipe_id: 14,
        ingredient_id: 18,
        measure: 'Pinch'
      },
      {
        recipe_id: 14,
        ingredient_id: 85,
        measure: '2 tsp'
      },
      {
        recipe_id: 14,
        ingredient_id: 86,
        measure: '1 1/2 tsp '
      },
      {
        recipe_id: 14,
        ingredient_id: 87,
        measure: '1 1/2 tsp '
      },
      {
        recipe_id: 14,
        ingredient_id: 6,
        measure: '1/2 tsp'
      },
      {
        recipe_id: 15,
        ingredient_id: 88,
        measure: '1 kg'
      },
      {
        recipe_id: 15,
        ingredient_id: 78,
        measure: '1 tbs'
      },
      {
        recipe_id: 15,
        ingredient_id: 5,
        measure: '1 tbs'
      },
      {
        recipe_id: 15,
        ingredient_id: 89,
        measure: '1 tbs'
      },
      {
        recipe_id: 15,
        ingredient_id: 39,
        measure: '1 tsp '
      },
      {
        recipe_id: 15,
        ingredient_id: 6,
        measure: '2 tsp'
      },
      {
        recipe_id: 15,
        ingredient_id: 90,
        measure: '2 tbs'
      },
      {
        recipe_id: 15,
        ingredient_id: 33,
        measure: '3 tbs'
      },
      {
        recipe_id: 15,
        ingredient_id: 91,
        measure: '1 cup '
      },
      {
        recipe_id: 15,
        ingredient_id: 36,
        measure: '1'
      },
      {
        recipe_id: 15,
        ingredient_id: 5,
        measure: '1 tsp '
      },
      {
        recipe_id: 15,
        ingredient_id: 90,
        measure: 'Splash'
      },
      {
        recipe_id: 15,
        ingredient_id: 92,
        measure: 'Sliced'
      },
      {
        recipe_id: 15,
        ingredient_id: 93,
        measure: 'Sliced'
      },
      {
        recipe_id: 15,
        ingredient_id: 94,
        measure: '6'
      },
      {
        recipe_id: 16,
        ingredient_id: 25,
        measure: '1.5kg'
      },
      {
        recipe_id: 16,
        ingredient_id: 62,
        measure: '2 leaves'
      },
      {
        recipe_id: 16,
        ingredient_id: 95,
        measure: '2'
      },
      {
        recipe_id: 16,
        ingredient_id: 26,
        measure: '3 tbs'
      },
      {
        recipe_id: 16,
        ingredient_id: 96,
        measure: '750g'
      },
      {
        recipe_id: 16,
        ingredient_id: 97,
        measure: '2'
      },
      {
        recipe_id: 16,
        ingredient_id: 74,
        measure: '500ml'
      },
      {
        recipe_id: 16,
        ingredient_id: 98,
        measure: 'Grated'
      },
      {
        recipe_id: 16,
        ingredient_id: 17,
        measure: 'Pinch'
      },
      {
        recipe_id: 16,
        ingredient_id: 18,
        measure: 'Pinch'
      },
      {
        recipe_id: 17,
        ingredient_id: 99,
        measure: '250 Grams'
      },
      {
        recipe_id: 17,
        ingredient_id: 100,
        measure: '500 Grams'
      },
      {
        recipe_id: 17,
        ingredient_id: 101,
        measure: 'Topping'
      },
      {
        recipe_id: 17,
        ingredient_id: 102,
        measure: 'Topping'
      },
      {
        recipe_id: 17,
        ingredient_id: 92,
        measure: '1 Bulb'
      },
      {
        recipe_id: 17,
        ingredient_id: 93,
        measure: '1'
      },
      {
        recipe_id: 17,
        ingredient_id: 24,
        measure: '3rd'
      },
      {
        recipe_id: 17,
        ingredient_id: 103,
        measure: '100 Grams'
      },
      {
        recipe_id: 18,
        ingredient_id: 104,
        measure: '300g'
      },
      {
        recipe_id: 18,
        ingredient_id: 105,
        measure: '2'
      },
      {
        recipe_id: 18,
        ingredient_id: 74,
        measure: '300ml '
      },
      {
        recipe_id: 18,
        ingredient_id: 46,
        measure: '4'
      },
      {
        recipe_id: 18,
        ingredient_id: 37,
        measure: 'Handful'
      },
      {
        recipe_id: 18,
        ingredient_id: 78,
        measure: 'Handful'
      },
      {
        recipe_id: 18,
        ingredient_id: 41,
        measure: '2 tbs'
      },
      {
        recipe_id: 18,
        ingredient_id: 2,
        measure: '1 chopped'
      },
      {
        recipe_id: 18,
        ingredient_id: 78,
        measure: '1 tsp '
      },
      {
        recipe_id: 18,
        ingredient_id: 106,
        measure: '2 tsp'
      },
      {
        recipe_id: 18,
        ingredient_id: 77,
        measure: '300g'
      },
      {
        recipe_id: 19,
        ingredient_id: 107,
        measure: '900g'
      },
      {
        recipe_id: 19,
        ingredient_id: 33,
        measure: '2 tbsp'
      },
      {
        recipe_id: 19,
        ingredient_id: 108,
        measure: '600ml'
      },
      {
        recipe_id: 19,
        ingredient_id: 109,
        measure: '800g'
      },
      {
        recipe_id: 19,
        ingredient_id: 110,
        measure: '1 tbsp'
      },
      {
        recipe_id: 19,
        ingredient_id: 98,
        measure: 'Grating'
      },
      {
        recipe_id: 19,
        ingredient_id: 111,
        measure: '3 tbsp'
      },
      {
        recipe_id: 19,
        ingredient_id: 112,
        measure: '200g'
      },
      {
        recipe_id: 19,
        ingredient_id: 113,
        measure: '1 finely sliced'
      },
      {
        recipe_id: 19,
        ingredient_id: 114,
        measure: '200g peeled raw'
      },
      {
        recipe_id: 19,
        ingredient_id: 37,
        measure: 'Large handful'
      },
      {
        recipe_id: 19,
        ingredient_id: 115,
        measure: 'Handful'
      },
      {
        recipe_id: 19,
        ingredient_id: 31,
        measure: 'Grated zest of 1'
      },
      {
        recipe_id: 19,
        ingredient_id: 116,
        measure: '25g grated'
      },
      {
        recipe_id: 19,
        ingredient_id: 31,
        measure: 'Juice of 1'
      },
      {
        recipe_id: 20,
        ingredient_id: 26,
        measure: '75g'
      },
      {
        recipe_id: 20,
        ingredient_id: 113,
        measure: '1kg'
      },
      {
        recipe_id: 20,
        ingredient_id: 17,
        measure: '½ tsp'
      },
      {
        recipe_id: 20,
        ingredient_id: 52,
        measure: '300ml '
      },
      {
        recipe_id: 20,
        ingredient_id: 73,
        measure: '1'
      },
      {
        recipe_id: 20,
        ingredient_id: 117,
        measure: '3'
      },
      {
        recipe_id: 20,
        ingredient_id: 98,
        measure: '¼ teaspoon'
      },
      {
        recipe_id: 20,
        ingredient_id: 118,
        measure: '225g'
      },
      {
        recipe_id: 20,
        ingredient_id: 17,
        measure: '½ tsp'
      },
      {
        recipe_id: 20,
        ingredient_id: 26,
        measure: '60g'
      },
      {
        recipe_id: 20,
        ingredient_id: 119,
        measure: '60g'
      },
      {
        recipe_id: 20,
        ingredient_id: 120,
        measure: '50g'
      },
      {
        recipe_id: 20,
        ingredient_id: 12,
        measure: '2 tbs'
      },
      {
        recipe_id: 21,
        ingredient_id: 40,
        measure: '100g '
      },
      {
        recipe_id: 21,
        ingredient_id: 46,
        measure: '2 large'
      },
      {
        recipe_id: 21,
        ingredient_id: 74,
        measure: '300ml '
      },
      {
        recipe_id: 21,
        ingredient_id: 121,
        measure: '1 tbls'
      },
      {
        recipe_id: 21,
        ingredient_id: 66,
        measure: 'to serve'
      },
      {
        recipe_id: 21,
        ingredient_id: 122,
        measure: 'to serve'
      },
      {
        recipe_id: 21,
        ingredient_id: 123,
        measure: 'to serve'
      },
      {
        recipe_id: 22,
        ingredient_id: 30,
        measure: '500g'
      },
      {
        recipe_id: 22,
        ingredient_id: 124,
        measure: '1 large'
      },
      {
        recipe_id: 22,
        ingredient_id: 91,
        measure: '150g'
      },
      {
        recipe_id: 22,
        ingredient_id: 73,
        measure: '1 beaten'
      },
      {
        recipe_id: 22,
        ingredient_id: 125,
        measure: '3 tbs'
      },
      {
        recipe_id: 22,
        ingredient_id: 93,
        measure: '400g'
      },
      {
        recipe_id: 22,
        ingredient_id: 4,
        measure: '4 tbs'
      },
      {
        recipe_id: 22,
        ingredient_id: 25,
        measure: '350g'
      },
      {
        recipe_id: 23,
        ingredient_id: 126,
        measure: '500g'
      },
      {
        recipe_id: 23,
        ingredient_id: 127,
        measure: '400ml'
      },
      {
        recipe_id: 23,
        ingredient_id: 128,
        measure: '3 x 7.5cm'
      },
      {
        recipe_id: 23,
        ingredient_id: 129,
        measure: '1 tbsp'
      },
      {
        recipe_id: 23,
        ingredient_id: 7,
        measure: 'sprigs of fresh'
      },
      {
        recipe_id: 24,
        ingredient_id: 130,
        measure: '250g'
      },
      {
        recipe_id: 24,
        ingredient_id: 69,
        measure: '2 tbs'
      },
      {
        recipe_id: 24,
        ingredient_id: 2,
        measure: '1 sliced'
      },
      {
        recipe_id: 24,
        ingredient_id: 131,
        measure: '0.25'
      },
      {
        recipe_id: 24,
        ingredient_id: 132,
        measure: '10'
      },
      {
        recipe_id: 24,
        ingredient_id: 35,
        measure: '4'
      },
      {
        recipe_id: 24,
        ingredient_id: 133,
        measure: '4 tbsp'
      },
      {
        recipe_id: 24,
        ingredient_id: 23,
        measure: '2 tbs'
      },
      {
        recipe_id: 24,
        ingredient_id: 21,
        measure: '1 tblsp '
      },
      {
        recipe_id: 24,
        ingredient_id: 134,
        measure: '1 tblsp '
      },
      {
        recipe_id: 25,
        ingredient_id: 15,
        measure: '1/4 lb'
      },
      {
        recipe_id: 25,
        ingredient_id: 2,
        measure: '1'
      },
      {
        recipe_id: 25,
        ingredient_id: 46,
        measure: '3'
      },
      {
        recipe_id: 25,
        ingredient_id: 135,
        measure: '1 tbs'
      },
      {
        recipe_id: 25,
        ingredient_id: 136,
        measure: '1/2 '
      },
      {
        recipe_id: 25,
        ingredient_id: 17,
        measure: 'To taste'
      },
      {
        recipe_id: 25,
        ingredient_id: 18,
        measure: 'To taste'
      },
      {
        recipe_id: 25,
        ingredient_id: 22,
        measure: 'Top'
      },
      {
        recipe_id: 26,
        ingredient_id: 137,
        measure: '2 1/2 shots '
      },
      {
        recipe_id: 26,
        ingredient_id: 138,
        measure: null
      },
      {
        recipe_id: 26,
        ingredient_id: 139,
        measure: null
      },
      {
        recipe_id: 27,
        ingredient_id: 140,
        measure: '1 3/4 shot '
      },
      {
        recipe_id: 27,
        ingredient_id: 141,
        measure: '1 Shot '
      },
      {
        recipe_id: 27,
        ingredient_id: 90,
        measure: '1/4 Shot'
      },
      {
        recipe_id: 27,
        ingredient_id: 142,
        measure: '1/8 Shot'
      },
      {
        recipe_id: 28,
        ingredient_id: 140,
        measure: '2 shots '
      },
      {
        recipe_id: 28,
        ingredient_id: 142,
        measure: '1/2 shot '
      },
      {
        recipe_id: 28,
        ingredient_id: 143,
        measure: '1/2 shot '
      },
      {
        recipe_id: 28,
        ingredient_id: 74,
        measure: '1/2 shot'
      },
      {
        recipe_id: 28,
        ingredient_id: 144,
        measure: '1/2 Fresh'
      },
      {
        recipe_id: 29,
        ingredient_id: 145,
        measure: '1/3 part '
      },
      {
        recipe_id: 29,
        ingredient_id: 146,
        measure: '1/3 part '
      },
      {
        recipe_id: 29,
        ingredient_id: 147,
        measure: '1/3 part '
      },
      {
        recipe_id: 30,
        ingredient_id: 148,
        measure: '1 part '
      },
      {
        recipe_id: 30,
        ingredient_id: 149,
        measure: '5 parts '
      },
      {
        recipe_id: 31,
        ingredient_id: 150,
        measure: '1/3 '
      },
      {
        recipe_id: 31,
        ingredient_id: 146,
        measure: '1/3 '
      },
      {
        recipe_id: 31,
        ingredient_id: 151,
        measure: '1/3 '
      },
      {
        recipe_id: 32,
        ingredient_id: 152,
        measure: '1/2 shot Bacardi '
      },
      {
        recipe_id: 32,
        ingredient_id: 153,
        measure: '1/2 shot '
      },
      {
        recipe_id: 33,
        ingredient_id: 154,
        measure: '1 oz '
      },
      {
        recipe_id: 33,
        ingredient_id: 140,
        measure: '1 oz '
      },
      {
        recipe_id: 33,
        ingredient_id: 155,
        measure: '4 oz '
      },
      {
        recipe_id: 34,
        ingredient_id: 156,
        measure: '1/3 part '
      },
      {
        recipe_id: 34,
        ingredient_id: 157,
        measure: '1 shot '
      },
      {
        recipe_id: 34,
        ingredient_id: 158,
        measure: '1/3 part '
      },
      {
        recipe_id: 34,
        ingredient_id: 159,
        measure: '1/3 part '
      },
      {
        recipe_id: 35,
        ingredient_id: 145,
        measure: '1/3 shot '
      },
      {
        recipe_id: 35,
        ingredient_id: 160,
        measure: '1/3 shot '
      },
      {
        recipe_id: 35,
        ingredient_id: 141,
        measure: '1/3 shot '
      },
      {
        recipe_id: 36,
        ingredient_id: 161,
        measure: '2 oz '
      },
      {
        recipe_id: 36,
        ingredient_id: 162,
        measure: '1 oz '
      },
      {
        recipe_id: 36,
        ingredient_id: 142,
        measure: '1 tsp '
      },
      {
        recipe_id: 37,
        ingredient_id: 152,
        measure: '1 oz Bacardi '
      },
      {
        recipe_id: 37,
        ingredient_id: 153,
        measure: '1 oz '
      },
      {
        recipe_id: 38,
        ingredient_id: 163,
        measure: '4 cl '
      },
      {
        recipe_id: 38,
        ingredient_id: 146,
        measure: '8 cl '
      },
      {
        recipe_id: 38,
        ingredient_id: 164,
        measure: null
      },
      {
        recipe_id: 39,
        ingredient_id: 146,
        measure: '1/3 '
      },
      {
        recipe_id: 39,
        ingredient_id: 141,
        measure: '1/3 '
      },
      {
        recipe_id: 39,
        ingredient_id: 145,
        measure: '1/4 '
      },
      {
        recipe_id: 40,
        ingredient_id: 165,
        measure: '1/2 oz '
      },
      {
        recipe_id: 40,
        ingredient_id: 140,
        measure: '1 oz '
      },
      {
        recipe_id: 40,
        ingredient_id: 166,
        measure: '1/2 oz '
      },
      {
        recipe_id: 40,
        ingredient_id: 162,
        measure: '1/2 tsp '
      },
      {
        recipe_id: 40,
        ingredient_id: 142,
        measure: '1 tsp '
      },
      {
        recipe_id: 40,
        ingredient_id: 167,
        measure: null
      },
      {
        recipe_id: 41,
        ingredient_id: 168,
        measure: '6 cl'
      },
      {
        recipe_id: 41,
        ingredient_id: 169,
        measure: '2 dashes'
      },
      {
        recipe_id: 41,
        ingredient_id: 7,
        measure: '2 Fresh leaves'
      },
      {
        recipe_id: 42,
        ingredient_id: 170,
        measure: '1 1/2 oz '
      },
      {
        recipe_id: 42,
        ingredient_id: 171,
        measure: '1 oz '
      },
      {
        recipe_id: 43,
        ingredient_id: 172,
        measure: '1 dash'
      },
      {
        recipe_id: 43,
        ingredient_id: 173,
        measure: '1 oz'
      },
      {
        recipe_id: 43,
        ingredient_id: 140,
        measure: '1 oz'
      },
      {
        recipe_id: 43,
        ingredient_id: 174,
        measure: '1 oz'
      },
      {
        recipe_id: 44,
        ingredient_id: 175,
        measure: '2 1/2 oz '
      },
      {
        recipe_id: 44,
        ingredient_id: 141,
        measure: '1 splash '
      },
      {
        recipe_id: 44,
        ingredient_id: 159,
        measure: 'Fill with '
      },
      {
        recipe_id: 45,
        ingredient_id: 164,
        measure: '1 part '
      },
      {
        recipe_id: 45,
        ingredient_id: 176,
        measure: '2 parts '
      },
      {
        recipe_id: 46,
        ingredient_id: 177,
        measure: null
      },
      {
        recipe_id: 46,
        ingredient_id: 50,
        measure: 'Unsweetened '
      },
      {
        recipe_id: 46,
        ingredient_id: 178,
        measure: null
      },
      {
        recipe_id: 47,
        ingredient_id: 160,
        measure: '2 cl '
      },
      {
        recipe_id: 47,
        ingredient_id: 146,
        measure: '2 cl '
      },
      {
        recipe_id: 47,
        ingredient_id: 179,
        measure: '2 cl '
      },
      {
        recipe_id: 48,
        ingredient_id: 180,
        measure: '1 1/2 oz'
      },
      {
        recipe_id: 48,
        ingredient_id: 181,
        measure: '1 1/2 oz'
      },
      {
        recipe_id: 48,
        ingredient_id: 152,
        measure: '1 oz'
      },
      {
        recipe_id: 48,
        ingredient_id: 182,
        measure: '1 tsp'
      },
      {
        recipe_id: 48,
        ingredient_id: 142,
        measure: '1 tsp'
      },
      {
        recipe_id: 48,
        ingredient_id: 183,
        measure: '1 tsp'
      },
      {
        recipe_id: 48,
        ingredient_id: 184,
        measure: '1 drop'
      },
      {
        recipe_id: 49,
        ingredient_id: 185,
        measure: '1/2 oz white '
      },
      {
        recipe_id: 49,
        ingredient_id: 150,
        measure: '1/2 oz '
      },
      {
        recipe_id: 49,
        ingredient_id: 186,
        measure: '1/2 oz '
      },
      {
        recipe_id: 49,
        ingredient_id: 187,
        measure: '1/2 oz '
      },
      {
        recipe_id: 49,
        ingredient_id: 188,
        measure: '1 oz '
      },
      {
        recipe_id: 50,
        ingredient_id: 189,
        measure: '2 oz '
      },
      {
        recipe_id: 50,
        ingredient_id: 159,
        measure: '2 oz '
      },
      {
        recipe_id: 50,
        ingredient_id: 190,
        measure: '2 oz '
      },
      {
        recipe_id: 50,
        ingredient_id: 191,
        measure: null
      }
    ],
  ),
  down: (queryInterface: QueryInterface) => queryInterface.bulkDelete(
    'ingredients_recipes',
    {},
  ),
};
