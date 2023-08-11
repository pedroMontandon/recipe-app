const convertToDoneRecipe = (recipe) => ({
  id: recipe.id,
  type: recipe.type.toLowerCase(),
  nationality: recipe.area,
  category: recipe.category,
  name: recipe.name,
  image: recipe.thumb,
  doneDate: (new Date()).toISOString(),
  tags: recipe.tags ? recipe.tags.split(',')
    .map((tag) => tag.replace(' ', '')) : [],
});

export default convertToDoneRecipe;
