import React from 'react';

import './App.css';
import CreateRecipeForm from './components/CreateRecipeForm';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <Sidebar />
        <div className="header" />
        <div className="content">
          {/* <Router></Router> */}
          <CreateRecipeForm />

        </div>
      </div>
    </div>
  );
}

export default App;
