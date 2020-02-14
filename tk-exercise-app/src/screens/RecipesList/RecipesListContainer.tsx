import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import CreateRecipeForm from '../../components/CreateRecipeForm';
import RecipeList from '../../components/RecipeList';
import { Recipe } from 'src/data/recipes/types';
import { getRecipesFromAPI } from '../../data/recipes/api';
import useRecipeState from '../../hooks/useRecipes';

function RecipesListContainer() {
  const history = useHistory();

  const { recipes, setRecipes, addRecipe, removeRecipe } = useRecipeState([]);
  const [ open, setOpen ] = useState(false);
  const [ recipeToDelete, setRecipeToDelete ] = useState<number>();

  useEffect(() => {
    getRecipesFromAPI()
      .then(res => setRecipes(res));
  }, []);

  const deleteRecipe = () => {
    if (recipeToDelete) removeRecipe(recipeToDelete);
    handleClose();
  }

  const handleClickOpen = (recipeIdToDelete: number) => {
    setRecipeToDelete(recipeIdToDelete);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const goToRecipeDetail = (id: number) => {
    history.push(`/recipe/${id}`);
  }

  const renderModal = () => (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Do you want to delete this recipe?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This action will remove the recipe permanently from the database.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <button onClick={handleClose} color="primary">
          Disagree
        </button>
        <button onClick={deleteRecipe} color="primary" autoFocus>
          Agree
        </button>
      </DialogActions>
    </Dialog>
  );

  return (
    <div>
      {renderModal()}
      <CreateRecipeForm addRecipe={addRecipe} />
      <RecipeList
        recipes={recipes}
        deleteRecipe={(id: number) => handleClickOpen(id)}
        goToRecipeDetail={(id: number) => goToRecipeDetail(id)} />
    </div>
  );
}

export default RecipesListContainer;
