import React from 'react';
import styled from "styled-components";

import useInputState from '../../hooks/useInputState';

type Props = {
  primary?: boolean
};

const Button = styled.button<Props>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #252529;
  color: #252529;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && `
    background: #252529;
    color: white;
  `}
`;

function CreateRecipeForm(props: { addRecipe: any })  {
  const [ value, handleChange, reset ] = useInputState('');

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    props.addRecipe(value);
    reset();
  }

  return (
    <div>
      <h4>Create recipe</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          type="text"
          value={value}
          onChange={handleChange} />

        <Button primary>Add recipe</Button>
      </form>
    </div>
  );
}

export default CreateRecipeForm;
