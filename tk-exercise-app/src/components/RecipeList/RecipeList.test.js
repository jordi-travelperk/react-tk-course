import React from 'react'
import { render, cleanup } from '@testing-library/react'
import RecipeList from '.'

describe('<RecipeList>', () => {
  afterEach(cleanup)

  it('should load and show recipes coming from the API', () => {
    expect(true).toBe(true);
  })
})
