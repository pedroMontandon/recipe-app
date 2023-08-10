import React from 'react';
import PropTypes from 'prop-types';
import Iframe from './Iframe';
import foodIcon from '../images/FoodIcon.png';
import drinkIcon from '../images/DrinkIcon.png';

function Details({ payload }) {
  const toSlice = 32;
  const {
    title,
    thumb,
    category,
    ingredients,
    instructions,
    youtube,
  } = payload;
  const bannerBG = { backgroundImage:
    `url(${thumb})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  };
  return (
    <>

      <div
        className="image-background"
        style={ bannerBG }
      >
        <div
          className="category-title"
        >
          <img src={ youtube === 'false' ? drinkIcon : foodIcon } alt="recipe icon" />
          <h4
            className="category-title"
            data-testid="recipe-category"
          >
            {/* { alcoholicOrNot === '' ? category : category } */ category.name}
          </h4>
        </div>
        <h1
          data-testid="recipe-title"
          className="progress-title"
        >
          { title }
        </h1>
      </div>

      <h4
        className="margin-text"
      >
        Ingredients
      </h4>
      <ul
        className="subsection"
      >
        {ingredients.map((ing, index) => ((
          <li
            key={ `${ing.name}${index}` }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {`${ing.ingredients_recipes.measure || ''} ${ing.name || ''}`}
          </li>)))}
      </ul>
      <h4
        className="margin-text"
      >
        Instructions
      </h4>
      <p
        data-testid="instructions"
        className="subsection"
      >
        { instructions }
      </p>
      {youtube ? <Iframe embedId={ youtube.slice(toSlice) } /> : false}
    </>
  );
}

Details.propTypes = {
  payload: PropTypes.shape({
    title: PropTypes.string,
    thumb: PropTypes.string,
    category: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    instructions: PropTypes.string,
    youtube: PropTypes.string,
    alcoholicOrNot: PropTypes.string,
  }).isRequired,
};

export default Details;
