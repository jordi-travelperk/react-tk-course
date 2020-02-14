import React from 'react';

import Button from '../../components/Button';
import useInputState from '../../hooks/useInputState';


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
