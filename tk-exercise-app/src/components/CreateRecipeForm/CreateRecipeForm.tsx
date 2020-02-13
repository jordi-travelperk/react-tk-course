import React, { Component } from 'react';


interface IFormProps {

}

interface IFormState {
  name: string;
}

class CreateRecipeForm extends Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);
  
    this.state = {
      name: ''
    };
  }

  handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: evt.target.value });
  }

  handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    this.setState({ name: '' });
  }

  render() {
    return (
      <div>
        <h4>Create recipe</h4>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default CreateRecipeForm;
