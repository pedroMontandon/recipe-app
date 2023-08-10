import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Ingredients from './Ingredients';
import '../styles/RecipeInProgress.css';
import foodIcon from '../images/FoodIcon.png';
import drinkIcon from '../images/DrinkIcon.png';

function RecipeInProgressCard({ recipe, id }) {
  const { pathname } = useLocation();
  const isMealsPage = pathname.includes('meals');
  const actualPage = isMealsPage ? 'Meal' : 'Drink';
  const lowerTitle = `${actualPage.toLowerCase()}s`;

  const bannerBG = { backgroundImage:
    `url(${recipe.thumb})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  };

  return (
    <section
      className="progress-wrapper"
    >
      <div
        className="image-background"
        style={ bannerBG }
      >
        <div
          className="category-title"
        >
          <img src={ isMealsPage ? foodIcon : drinkIcon } alt=" recipe icon" />
          <h4
            data-testid="recipe-category"
          >
            { recipe.category.name }
          </h4>
        </div>
        <h1
          data-testid="recipe-title"
          className="progress-title"
        >
          {recipe.name}

        </h1>

      </div>
      <Ingredients recipe={ recipe } id={ id } title={ lowerTitle } />
      <section
        className="instructions"
      >
        <h4>Instructions</h4>
        <div
          className="subsection"
        >
          <p data-testid="instructions">{ recipe.instructions }</p>
        </div>
      </section>
    </section>
  );
}

RecipeInProgressCard.propTypes = {
  recipe: PropTypes
    .objectOf(PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))).isRequired,
  id: PropTypes.string.isRequired,
};

export default RecipeInProgressCard;
