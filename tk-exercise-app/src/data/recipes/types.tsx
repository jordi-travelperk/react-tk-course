import { Ingredient } from '../ingredients/types';

export interface Recipe {
  id: number;
  name: string;
  ingredients: Ingredient[];
  description?: string;
};
