 
import { useState, useEffect } from 'react';
import { getRecipesFromAPI } from '../data/recipes/api';
import { Recipe } from 'src/data/recipes/types';

export default (initialRecipes: Recipe[]) => {
  const [ recipes, setRecipes ] = useState<any>(initialRecipes);
  return {
    recipes,
    setRecipes,
    addRecipe: (recipeName: string, recipeDescription?: string) => {
      setRecipes([
        { id: 99, name: recipeName, description: recipeDescription || '', ingredients: [] },
        ...recipes
      ])
    },
    removeRecipe: (recipeId: number) => {
      setRecipes(recipes.filter((recipe: Recipe) => recipe.id !== recipeId));
    }
  };
}
