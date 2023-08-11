import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ShareAndFavHorizontal from './ShareAndFavHorizontal';

function FavoriteRecipeCard({ recipe, index }) {
  const { type, id, name, image, category, nationality } = recipe;
  const { push } = useHistory();
  return (
    <section className="favorite-recipe-card">
      <div
        role="presentation"
        onClick={ () => push(`/${type}/${id}`) }
      >
        <img
          data-testid={ `${index}-horizontal-image` }
          alt={ `${name} ${type}` }
          src={ image }
        />
        <div className="text-container-card">
          <h3 data-testid={ `${index}-horizontal-name` }>{ name }</h3>
          <p data-testid={ `${index}-horizontal-top-text` }>
            { `${nationality.name} - ${category.name}` }
          </p>
        </div>
      </div>
      <ShareAndFavHorizontal
        recipe={ recipe }
        url={ `${window.location.origin}/${type}/${id}` }
        index={ index }
      />
    </section>
  );
}

FavoriteRecipeCard.propTypes = {
  recipe: PropTypes.objectOf(String).isRequired,
  index: PropTypes.number.isRequired,
};

export default FavoriteRecipeCard;
