import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";

import { Recipe } from 'src/data/recipes/types';
import styled from "styled-components";

import { getRecipeFromAPI } from '../../data/recipes/api';

const RecipeDetail = styled.div`
  background-color: #45454d;
  color: #fff;
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
      {recipe?.ingredients.map(ingredient => 
        <span>ingredient.name</span>
      )}
    </RecipeDetail>
  );
}

export default RecipeContainer;
