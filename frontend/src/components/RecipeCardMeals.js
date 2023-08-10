import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RecipeCardMeals({ recipe: { name, thumb, id }, index }) {
  return (
    <Link to={ `/meals/${id}` }>
      <section data-testid={ `${index}-recipe-card` } className="recipe-card">
        <div>
          <img
            src={ thumb }
            alt={ name }
            data-testid={ `${index}-card-img` }
          />
        </div>
        <h4 data-testid={ `${index}-card-name` }>{ name }</h4>
      </section>
    </Link>
  );
}

RecipeCardMeals.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string,
    thumb: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCardMeals;
