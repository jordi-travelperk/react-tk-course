import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import shortid from 'shortid';

import { Recipe } from 'src/data/recipes/types';
import styled from "styled-components";

import { getRecipeFromAPI } from '../../data/recipes/api';

const RecipeDetail = styled.div`
  background-color: ##ecf0f1;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
`;


function RecipeContainer() {
  const { recipeId } = useParams();
  console.log('HERE: ', recipeId);
  const [ recipe, setRecipe ] = useState<Recipe>();

  useEffect(() => {
    if (recipeId) {
      getRecipeFromAPI(parseInt(recipeId, 10))
        .then((res) => setRecipe(res));
    }
  }, [recipeId]);

  return (
    <RecipeDetail>
      <h4>{recipe?.name}</h4>
      <p>{recipe?.description}</p>
      {recipe?.ingredients.map((ingredient) => 
        <span key={shortid.generate()}>{ingredient.name}</span>
      )}
    </RecipeDetail>
  );
}

export default RecipeContainer;
