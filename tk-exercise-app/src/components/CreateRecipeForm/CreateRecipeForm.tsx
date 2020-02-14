import React from 'react';

import Button from '../../components/Button';
import useInputState from '../../hooks/useInputState';


function CreateRecipeForm(props: { addRecipe: any })  {
  const [ name, handleNameChange, reset ] = useInputState('');
  const [ description, handleDescritionChange ] = useInputState('');

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    props.addRecipe(name, description);
    reset();
  }

  return (
    <div>
      <h4>Create recipe</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          type="text"
          value={name}
          placeholder="Name your recipe..."
          onChange={handleNameChange} />

        <label htmlFor="description"></label>
        <input
          type="text"
          value={description}
          placeholder="Recipe description..."
          onChange={handleDescritionChange} />

        <Button primary>Add recipe</Button>
      </form>
    </div>
  );
}

export default CreateRecipeForm;
