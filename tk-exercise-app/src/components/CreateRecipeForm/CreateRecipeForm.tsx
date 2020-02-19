import React from 'react';
import styled from 'styled-components'
import Button from '../../components/Button';
import useInputState from '../../hooks/useInputState';
import { Recipe } from '../../data/recipes/types';

const FormContainer = styled.form<any>`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  padding: 20px;
  border-radius: 5px;
  background-color: #f2f2f2;
`;

const Input = styled.input<any>`
  width: 100%;
  padding: 12px 20px;
  margin: 12px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

function CreateRecipeForm(props: { addRecipe: any, recipe: Recipe | null, editRecipe: any })  {
  const [ name, handleNameChange, resetName ] = useInputState(props.recipe?.name || '');
  const [ description, handleDescritionChange, resetDescription ] = useInputState(props.recipe?.description || '');
  const [ ingredients, handleIngredientsChange, resetIngredients ] = useInputState(props.recipe?.ingredients.map(ingredient => ingredient.name).join(',') || '');

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (props.recipe) {
      props.editRecipe(props.recipe.id, {
        name,
        description,
        ingredients: ingredients.split(',').map((ingredient: string) => ({ name: ingredient }))
      });
    } else {
      props.addRecipe({
        name,
        description,
        ingredients: ingredients.split(',').map((ingredient: string) => ({ name: ingredient }))
      });
    }

    resetName();
    resetDescription();
    resetIngredients();
  }
  console.log('CreateForm render');
  return (
      <FormContainer onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          value={name}
          placeholder="Name your recipe..."
          onChange={handleNameChange} />

        <label htmlFor="description">Description</label>
        <Input
          type="text"
          value={description}
          placeholder="Recipe description..."
          onChange={handleDescritionChange} />

        <label htmlFor="description">Ingredients (comma separated)</label>
        <Input
          type="text"
          value={ingredients}
          placeholder="Ingredients..."
          onChange={handleIngredientsChange} />

        <Button primary>{props.recipe ? 'Edit recipe' : 'Add recipe'}</Button>
      </FormContainer>
  );
}

export default CreateRecipeForm;
