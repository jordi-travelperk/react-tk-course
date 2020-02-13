import React, { useState } from 'react';

import CreateRecipeForm from '../../components/CreateRecipeForm';
import RecipeList from '../../components/RecipeList';
import { Recipe } from 'src/data/recipes/types';


function RecipesListContainer() {
  const initialRecipes: Recipe[] = [
    { id: 1, name: 'Recipe 1', description: 'recipe1 description', ingredients: [] },
    { id: 2, name: 'Recipe 2', description: 'recipe2 description', ingredients: [] },
    { id: 3, name: 'Recipe 3', description: 'recipe3 description', ingredients: [] }
  ];

  const [ recipes, setRecipes ] = useState<any>(initialRecipes);

  const addRecipe = (recipeName: string) => {
    console.log('add recipe hook: ', recipeName)
    setRecipes([
      ...recipes,
      { id: 99, name: recipeName, description: 'Random', ingredients: [] }
    ]);
  }

  return (
    <div>
      <CreateRecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default RecipesListContainer;
