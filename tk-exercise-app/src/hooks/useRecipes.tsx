 
import { useState } from 'react';
import { Recipe } from 'src/data/recipes/types';

export default (initialRecipes: Recipe[]) => {
  const [ recipes, setRecipes ] = useState<any>(initialRecipes);
  return {
    recipes,
    setRecipes,
    addRecipe: (recipe: Recipe) => {
      setRecipes([
        { id: recipe.id, name: recipe.name, description: recipe.description || '', ingredients: recipe.ingredients },
        ...recipes
      ])
    },
    removeRecipe: (recipeId: number) => {
      setRecipes(recipes.filter((recipe: Recipe) => recipe.id !== recipeId));
    },
    editRecipe: (recipeId: number, recipeToEdit: Recipe) => {
      console.log('recipeToEdit: ', recipeToEdit);
      setRecipes(recipes.map((recipe: Recipe) => {
        if (recipe.id === recipeId) {
          return recipeToEdit;
        }

        return recipe;
      }))
    }
  };
}
