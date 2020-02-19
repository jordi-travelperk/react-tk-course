import React from 'react'
import { render, cleanup, wait, fireEvent, waitForElement, within } from '@testing-library/react'
import RecipesListContainer from '.';
import { getRecipesFromAPI } from '../../data/recipes/api';
import { recipe as recipeFabricator } from '../../fabricators/recipes';
import { createMemoryHistory as createHistory } from 'history';
import { Router } from 'react-router-dom';

jest.mock('../../data/recipes/api');

const setupComponent = (props = {}) => {
  if (!props.history) {
    props.history = createHistory()
  }

  const propsToUse = {
    history: props.history,
    recipes: props.recipes,
    ...props,
  }

  return render(
    <Router history={props.history}>
      <RecipesListContainer />
    </Router>
  )
}

function validateRecipeCard({ recipe, getByTestId }) {
  const { getByText } = within(getByTestId(`RecipeCard-${recipe.id}`))

  expect(getByText(recipe.name)).toBeInTheDocument()
  expect(getByText(recipe.description)).toBeInTheDocument()
}

describe.only('<RecipeListContainer>', () => {
  afterEach(cleanup);

  it.only('should load and show recipes coming from the API', async () => {
    const recipes = recipeFabricator.times(10);
    getRecipesFromAPI.mockResolvedValueOnce({ recipes });

    const history = createHistory();
    history.push = jest.fn();

    const { getByText, getByTestId } = setupComponent({ history, recipes });

    expect(getByText('No recipes yet! :(')).toBeInTheDocument();

    // Make sure that API has been called correctly
    expect(getRecipesFromAPI).toHaveBeenCalledTimes(1);
    expect(getRecipesFromAPI).toHaveBeenCalledWith();

    console.log('Wait for element to render: ', recipes[0].name);
    await waitForElement(() => getByText(/List of recipes/));
    console.log('awaited, now check!!');
    recipes.forEach(recipe => validateRecipeCard({ recipe, getByTestId }))
  });

  it('should allow navigate to recipe detail', async () => {
    const recipes = recipeFabricator.times(10);
    getRecipesFromAPI.mockResolvedValueOnce({ recipes });

    const history = createHistory();
    history.push = jest.fn();

    const { getByText } = setupComponent({ history, recipes });

    // wait for recipes to be rendered
    await waitForElement(() => getByText(recipes[0].name));

    const navBtn = getByLabelText('VisibilityIcon');
    fireEvent.click(navBtn);
    await wait(() => expect(history.location.pathname).toBe(`/recipes/${recipeId}`));
  });

  it('should trigger open modal for creating a recipe', async () => {
    getRecipesFromAPI.mockResolvedValueOnce({ recipes: [] });
    const history = createHistory();
    history.push = jest.fn();

    const { getByText } = setupComponent({ history, recipes: [] });

    const button = getByText(/Create recipe/);
    fireEvent.click(button);

    // expect(openRecipeModal).toHaveBeenCalledTimes(1);
    await wait(() =>
      expect(getByText("Add new recipe to list")).toBeInTheDocument()
    )
  });
});
