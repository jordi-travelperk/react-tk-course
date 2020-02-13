import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Sidebar from './components/Sidebar';

const RecipesListContainer = lazy(() => import('./screens/RecipesList'));
const AboutContainer = lazy(() => import('./screens/About'));

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="grid-sidebar">
          <Sidebar></Sidebar>
        </div>
        <div className="grid-header">
          <h4>List ingredients</h4>
        </div>
        <div className="grid-content">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path='/about' component={ AboutContainer }></Route>
              <Route exact path='/' component={ RecipesListContainer }></Route>
            </Switch>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
