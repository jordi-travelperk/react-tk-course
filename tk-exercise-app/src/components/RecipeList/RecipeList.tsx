import React from 'react';
import { Recipe } from 'src/data/recipes/types';

function RecipeList(props: { recipes: Recipe[] })  {
  return (
    <div>
      {props.recipes.length 
        ? props.recipes.map((recipe: Recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))
        : <h4>No recipes yet!</h4>
      }
    </div>
  );
}

export default RecipeList;
