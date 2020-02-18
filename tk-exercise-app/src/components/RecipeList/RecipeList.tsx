import React from 'react';
import { Recipe } from 'src/data/recipes/types';
import RecipeCard from '../../components/RecipeCard'

function RecipeList(props: { recipes: Recipe[], deleteRecipe: any, goToRecipeDetail: any, editRecipe: any })  {
  return (
    <div>
      {props?.recipes.length
        ? props.recipes.map((recipe: Recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            deleteRecipe={props.deleteRecipe}
            goToRecipeDetail={props.goToRecipeDetail}
            editRecipe={props.editRecipe} />
        ))
        : <h4>No recipes yet! :(</h4>
      }
    </div>
  );
}

export default RecipeList;
