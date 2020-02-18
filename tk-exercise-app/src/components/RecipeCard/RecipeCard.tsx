import React, { memo } from 'react';
import { Recipe } from 'src/data/recipes/types';
import styled from 'styled-components';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Create';
import shortid from 'shortid';

const RecipeItem = styled.li<any>`
  width: 80%;
  margin: 20px 0px;
  list-style: none;
  background-color: ##ecf0f1;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
`;

const IconWrapper = styled.div<any>`
  display: flex;
`;

function RecipeCard(props: { recipe: Recipe, deleteRecipe: any, goToRecipeDetail: any, editRecipe: any })  {
  const recipe: Recipe = props.recipe;

  return (
    <RecipeItem>
      {console.log(`Rendering RecipeItem ${recipe.id}`)}
      <h4>#{recipe.id} Name: {recipe.name}</h4>
      <p>Description: {recipe.description || 'No description'}</p>
      <ul>
        Ingredients: {recipe.ingredients.map((ingredient) =>
          <li key={shortid.generate()}>{ingredient.name}</li>
        )}
      </ul>

      <IconWrapper>
        <DeleteForeverIcon
          style={{ cursor: 'pointer', marginLeft: 20 }}
          onClick={() => props.deleteRecipe(recipe.id)} />
        <VisibilityIcon
          style={{ cursor: 'pointer', marginLeft: 20 }}
          onClick={() => props.goToRecipeDetail(recipe.id)} />
        <EditIcon
          style={{ cursor: 'pointer', marginLeft: 20 }}
          onClick={() => props.editRecipe(recipe.id)} />
      </IconWrapper>
    </RecipeItem>
  );
}

export default memo(RecipeCard);
