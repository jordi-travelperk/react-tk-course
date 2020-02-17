import React, { createContext } from 'react';
import useRecipeState from '../hooks/useRecipes';
import { Recipe } from 'src/data/recipes/types';

type Context = {
  recipes: Recipe[],
  addRecipe: (recipeName: string, recipeDescription?: string) => void,
  removeRecipe: (recipeId: number) => void,
  setRecipes: any
}

export const RecipesContext = createContext<Context>({
  recipes: [],
  setRecipes: () => {},
  addRecipe: () => {},
  removeRecipe: () => {}
});

export function RecipesProvider(props: any) {
  const { recipes, addRecipe, removeRecipe, setRecipes } = useRecipeState([]);

  return (
    <RecipesContext.Provider value={{ recipes, addRecipe, removeRecipe, setRecipes }}>
      {props.children}
    </RecipesContext.Provider>
  );
}
