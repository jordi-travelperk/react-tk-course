import React from 'react';
import { Recipe } from 'src/data/recipes/types';
import styled from 'styled-components';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import VisibilityIcon from '@material-ui/icons/Visibility';
import shortid from 'shortid';

const RecipesContainer = styled.li<any>`
  width: 100%;
  border: 1px solid red;
  padding: 40px;
  list-style: none;
`;

const RecipeItem = styled.div<any>`
  background-color: ##ecf0f1;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px;
`;

function RecipeList(props: { recipes: Recipe[], deleteRecipe: any, goToRecipeDetail: any })  {
  return (
    <div>
      {props?.recipes.length
        ? props.recipes.map((recipe: Recipe) => (
          <RecipesContainer key={recipe.id}>
            <RecipeItem>
              <h4>Name: {recipe.name}</h4>
              <p>Description: {recipe.description || 'No description'}</p>
              <p>
                Ingredients: {recipe.ingredients.map((ingredient) =>
                  <span key={shortid.generate()}>{ingredient.name}</span>
                )}
              </p>

              
              <DeleteForeverIcon
                style={{ cursor: 'pointer' }}
                onClick={() => props.deleteRecipe(recipe.id)} />
              <VisibilityIcon
                style={{ cursor: 'pointer' }}
                onClick={() => props.goToRecipeDetail(recipe.id)} />
            </RecipeItem>
          </RecipesContainer>
        ))
        : <h4>No recipes yet! :(</h4>
      }
    </div>
  );
}

export default RecipeList;
