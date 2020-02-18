import React from 'react';
import styled from 'styled-components';

import { Recipe } from 'src/data/recipes/types';
import RecipeCard from '../../components/RecipeCard'

const RecipesWrapper = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function RecipeList(props: { recipes: Recipe[], deleteRecipe: any, goToRecipeDetail: any, editRecipe: any })  {
  return (
    <RecipesWrapper>
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
    </RecipesWrapper>
  );
}

export default RecipeList;
