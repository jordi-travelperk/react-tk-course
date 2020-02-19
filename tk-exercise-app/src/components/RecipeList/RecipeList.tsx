import React, { useContext } from 'react';
import styled from 'styled-components';

import { Recipe } from 'src/data/recipes/types';
import RecipeCard from '../../components/RecipeCard'
import { RecipesContext } from '../../contexts/recipesContext';

const RecipesWrapper = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function RecipeList(props: { deleteRecipe: any, goToRecipeDetail: any, editRecipe: any })  {
  const { recipes } = useContext(RecipesContext);
  
  return (
    <RecipesWrapper>
      {console.log('Rendering RecipesWrapper with recipes: ', recipes.length)}
      {recipes.length
        ? <div>
            <p>List of recipes</p>
            {recipes.map((recipe: Recipe) => (
              <RecipeCard
                data-testid={`RecipeCard-${recipe.id}`}
                key={recipe.id}
                recipe={recipe}
                deleteRecipe={props.deleteRecipe}
                goToRecipeDetail={props.goToRecipeDetail}
                editRecipe={props.editRecipe} />
            ))}
          </div>
        : <h4>No recipes yet! :(</h4>
      }
    </RecipesWrapper>
  );
}

export default RecipeList;
