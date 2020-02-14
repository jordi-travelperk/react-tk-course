import { Recipe } from './types';
import { requestAll } from '../../utils/api';

export const getRecipesFromAPI = (): Promise<Recipe[]> => {
  return requestAll(`recipes/`, {
    prefix: '',
  });
}

export const getRecipeFromAPI = (recipeId: number): Promise<Recipe> => {
  return requestAll(`recipes/${recipeId}`, {
    prefix: '',
  });
}
