import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppProvider';
import RecipeCardMeals from '../components/RecipeCardMeals';
import RecipeCardDrinks from '../components/RecipeCardDrinks';

const MEALS_API = '/meals/name?q='; // pode ser /random se preferir
const DRINKS_API = '/drinks/name?q='; // pode ser /random se preferir
const MEALS_CATEGORIES = '/meals/categories';
const DRINK_CATEGORIES = '/drinks/categories';
const CATEGORY_SELECTED_MEALS = '/meals/category?q=';
const CATEGORY_SELECTED_DRINKS = '/drinks/category?q=';

function useRecipes(title) {
  const lowerTitle = title.toLowerCase();
  const { apiResponse } = useContext(AppContext);
  const [recipes, setRecipes] = useState([]);

  const URL_API = title === 'Meals' ? MEALS_API : DRINKS_API;
  const RecipeCard = title === 'Meals' ? RecipeCardMeals : RecipeCardDrinks;
  const URL_CATEGORIES = title === 'Meals' ? MEALS_CATEGORIES : DRINK_CATEGORIES;
  const URL_CATEGORY_SELECTED = title === 'Meals'
    ? CATEGORY_SELECTED_MEALS : CATEGORY_SELECTED_DRINKS;

  useEffect(() => {
    setRecipes(apiResponse[lowerTitle]);
  }, [apiResponse[lowerTitle]]);

  return {
    URL_API,
    recipesResponse: recipes,
    RecipeCard,
    URL_CATEGORIES,
    URL_CATEGORY_SELECTED,
  };
}

export default useRecipes;
