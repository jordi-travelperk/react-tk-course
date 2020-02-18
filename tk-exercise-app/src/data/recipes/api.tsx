import { Recipe } from './types';
import { requestAll, insertOne, deleteOne, editOne } from '../../utils/api';

export const getRecipesFromAPI = (queryParams: string = ''): Promise<Recipe[]> => {
  return requestAll(`recipes/${queryParams}`);
}

export const getRecipeFromAPI = (recipeId: number): Promise<Recipe> => {
  return requestAll(`recipes/${recipeId}`);
}

export const createNewRecipe = (recipe: Recipe): Promise<Recipe> => {
  return insertOne(`recipes/`, recipe)
}

export const deleteRecipeById = (recipeId: number) => {
  return deleteOne(`recipes/${recipeId}`)
}

export const editRecipeById = (recipeId: number, recipe: Recipe): Promise<Recipe> => {
  return editOne(`recipes/${recipeId}/`, recipe);
}
