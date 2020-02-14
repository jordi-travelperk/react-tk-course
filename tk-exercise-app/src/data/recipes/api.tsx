import { Recipe } from './types';
import { requestAll } from '../../utils/api';

export const getRecipesFromAPI = (): Promise<Recipe[]> => {
  return requestAll(`recipes/`, {
    prefix: '',
  });
}
