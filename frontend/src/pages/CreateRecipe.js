import React, { useState } from 'react';
import Footer from '../components/Footer';
import RecipeForm from '../components/RecipeForm';

function CreateRecipe() {
  const [recipe, setRecipe] = useState({
    name: '',
    type: 'Meals',
    category: 0,
    area: null,
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
        <RecipeForm states={ recipe } func={ handleChange } />
      </main>
      <Footer/>
    </div>
  );
}

export default CreateRecipe;
