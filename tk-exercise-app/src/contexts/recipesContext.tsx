import React, { createContext } from 'react';
import useRecipeState from '../hooks/useRecipes';
import { Recipe } from 'src/data/recipes/types';

type Context = {
  recipes: Recipe[],
  addRecipe: (recipe: Recipe) => void,
  removeRecipe: (recipeId: number) => void,
  setRecipes: (recipes: Recipe[]) => void,
  editRecipe: (recipeId: number, recipe: Recipe) => void
}

export const RecipesContext = createContext<Context>({
  recipes: [],
  setRecipes: () => {},
  addRecipe: () => {},
  removeRecipe: () => {},
  editRecipe: () => {}
});

export function RecipesProvider(props: any) {
  const { recipes, addRecipe, removeRecipe, setRecipes, editRecipe } = useRecipeState([]);

  return (
    <RecipesContext.Provider value={{ recipes, addRecipe, removeRecipe, setRecipes, editRecipe }}>
      {props.children}
    </RecipesContext.Provider>
  );
}
