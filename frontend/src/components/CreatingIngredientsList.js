import React from 'react';
import PropTypes from 'prop-types';

function CreatingIngredientsList({ ingredients, ingredientNames }) {
  return (
    <ol>
      {
        ingredients.map((ingredient) => (
          <li key={ `${ingredient.id}-ingredient-in-recipe` }>
            { ingredient.measure }
            { ' ' }
            { ingredientNames[ingredient.id - 1].name }
          </li>
        ))
      }
    </ol>
  );
}

CreatingIngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    measure: PropTypes.string,
  })).isRequired,
  ingredientNames: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default CreatingIngredientsList;
