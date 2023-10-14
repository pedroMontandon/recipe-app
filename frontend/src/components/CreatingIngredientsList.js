import React from 'react';
import PropTypes from 'prop-types';

function CreatingIngredientsList({ ingredients, ingredientNames, func }) {
  const deleteIngredient = (indexToRemove) => {
    const newValue = ingredients.filter((_, index) => index !== indexToRemove);
    func({ target: { name: 'ingredients', value: newValue } });
  };

  return (
    <ol>
      {
        ingredients.map((ingredient, index) => (
          <li key={ `${ingredient.id}-ingredient-in-recipe` }>
            <span>
              { ingredient.measure }
              { ' ' }
              { ingredientNames[ingredient.id - 1].name }
            </span>
            <button type="button" onClick={ () => deleteIngredient(index) }>
              Delete ingredient
            </button>
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
  func: PropTypes.func.isRequired,
};

export default CreatingIngredientsList;
