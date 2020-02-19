import React, { createContext } from 'react';
import useRecipeState from '../hooks/useRecipes';
import { Recipe } from 'src/data/recipes/types';

type Context = {
  recipes: Recipe[],
  setRecipes: (recipes: Recipe[]) => void,
}

type DispatchContext = {
  addRecipe: (recipe: Recipe) => void,
  removeRecipe: (recipeId: number) => void,
  editRecipe: (recipeId: number, recipe: Recipe) => void
}

export const RecipesContext = createContext<Context>({
  recipes: [],
  setRecipes: () => {}
});

export const RecipesDispatchContext = createContext<DispatchContext>({
  addRecipe: () => {},
  removeRecipe: () => {},
  editRecipe: () => {}
});

export function RecipesProvider(props: any) {
  const { recipes, addRecipe, removeRecipe, setRecipes, editRecipe } = useRecipeState([]);

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      <RecipesDispatchContext.Provider value={{ addRecipe, removeRecipe, editRecipe }}>
        {props.children}
      </RecipesDispatchContext.Provider>
    </RecipesContext.Provider>
  );
}
