import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import RecipeInProgressCard from '../components/RecipeInProgressCard';
import ShareAndFav from '../components/ShareAndFav';

const MEAL_ID_ENDPOINT = '/meals/';
const COCKTAIL_ID_ENDPOINT = '/drinks/';
const INITIAL_IN_PROGRESS_RECIPES = { meals: {}, drinks: {} };

function RecipeInProgress() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const URLpath = window.location.href.replace('/in-progress', '');
  const URL = pathname.includes('meals')
    ? (MEAL_ID_ENDPOINT + id) : (COCKTAIL_ID_ENDPOINT + id);
  const [isLoading, , recipe, fetchRecipe] = useFetch();
  if (!JSON.parse(localStorage.getItem('inProgressRecipes'))) {
    localStorage.setItem('inProgressRecipes', JSON
      .stringify(INITIAL_IN_PROGRESS_RECIPES));
  }

  useEffect(() => {
    fetchRecipe(URL);
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <section>
      <ShareAndFav url={ URLpath } recipe={ recipe } />
      { recipe && (
        <RecipeInProgressCard recipe={ recipe } id={ id } />
      )}
    </section>
  );
}

RecipeInProgress.propTypes = {
};

export default RecipeInProgress;
