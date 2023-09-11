import React, { useState } from 'react';
import Footer from '../components/Footer';
import RecipeForm from '../components/RecipeForm';
import api from '../utils/api';

function CreateRecipe() {
  const [recipe, setRecipe] = useState({
    name: '',
    type: 'Meals',
    categoryId: 0,
    areaId: undefined,
    instructions: '',
    thumb: '',
    tags: [],
    youtube: '',
    ingredients: [],
  });

  const handleChange = ({ target: { name, value } }) => {
    setRecipe({ ...recipe, [name]: value });
  }

  return (
    <div className="create-recipe-page">
      <header>
        <h2>Create your recipe</h2>
      </header>
      <main>
        <RecipeForm states={ recipe } func={ handleChange }>
          <button
            type="submit"
            onClick={ async (e) => {
              e.preventDefault();
              const response = await api.post('/recipes', {
                ...recipe,
                tags: recipe.tags.join(', '),
                categoryId: Number(recipe.categoryId),
                youtube: recipe.youtube || undefined,
                area: recipe.areaId || undefined,
              });
              setRecipe({
                name: '',
                type: 'Meals',
                categoryId: 0,
                areaId: undefined,
                instructions: '',
                thumb: '',
                tags: [],
                youtube: '',
                ingredients: [],
              });
              console.log(response);
            } }
          >
            Create Recipe
          </button>
        </RecipeForm>
      </main>
      <Footer/>
    </div>
  );
}

export default CreateRecipe;
