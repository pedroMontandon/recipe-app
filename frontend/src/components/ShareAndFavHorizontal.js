import React, { useContext, useEffect, useState } from 'react';
import clipBoardCopy from 'clipboard-copy';
import PropTypes from 'prop-types';
import BHIcon from '../images/blackHeartIcon.svg';
import ShareIcon from '../images/shareIcon.svg';
import { AppContext } from '../context/AppProvider';

function ShareAndFavHorizontal({ url, recipe, index }) {
  const { functions: { setFavoriteRecipes }, favoriteRecipes } = useContext(AppContext);
  const [copied, setCopied] = useState(false);
  const [favorite, setFavorite] = useState(
    favoriteRecipes.some(({ id }) => recipe.id === id),
  );

  const toClipBoard = (path) => {
    clipBoardCopy(path);
    setCopied(true);
  };

  const parseRecipe = (data) => {
    const toLocalStorage = {
      id: data.id,
      type: data.type.toLowerCase(),
      nationality: data.area.name,
      category: data.category.name,
      name: data.name,
      image: data.thumb,
    };
    return toLocalStorage;
  };

  const favRecipeList = (payload) => {
    const prevFav = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const parsed = parseRecipe(payload);
    const isFav = prevFav.some((fav) => fav.id === parsed.id);
    if (isFav) {
      const filtered = prevFav.filter((fv) => fv.id !== parsed.id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(filtered));
      setFavoriteRecipes(filtered);
    } else {
      localStorage.setItem('favoriteRecipes', JSON.stringify([...prevFav, parsed]));
      setFavoriteRecipes([...prevFav, parsed]);
    }
    setFavorite(!favorite);
  };

  useEffect(() => {
    const favLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favLocalStorage) {
      const isFav = favLocalStorage.some(({ id }) => url.includes(id));
      setFavorite(isFav);
    }
  }, []);

  return (
    <div className="share-fav-container">
      <button
        onClick={ () => { toClipBoard(url); } }
        className="favorite-card-button"
      >
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          src={ ShareIcon }
          alt="Share Icon"
        />
      </button>
      <button
        onClick={ () => { favRecipeList(recipe); } }
        className="favorite-card-button"
      >
        <img
          data-testid={ `${index}-horizontal-favorite-btn` }
          src={ BHIcon }
          alt="Favorite Icon"
        />
      </button>
      { copied === false ? false : (
        <span>
          Link copied!
        </span>
      )}
    </div>
  );
}

ShareAndFavHorizontal.propTypes = {
  url: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    thumbnail: PropTypes.string,
    category: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    measurements: PropTypes.arrayOf(PropTypes.string),
    instructions: PropTypes.string,
    video: PropTypes.string,
    alcoholicOrNot: PropTypes.string,
  }).isRequired,
};

export default ShareAndFavHorizontal;
