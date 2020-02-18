import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import CreateRecipeForm from '../../components/CreateRecipeForm';
import RecipeList from '../../components/RecipeList';
import { getRecipesFromAPI, createNewRecipe, deleteRecipeById, editRecipeById } from '../../data/recipes/api';
import { Recipe } from '../../data/recipes/types';
import { RecipesContext } from '../../contexts/recipesContext';
import useInputState from '../../hooks/useInputState';
import SearchInput from '../../components/SearchInput';
import Button from '../../components/Button';

function RecipesListContainer() {
  const history = useHistory();

  const { recipes, setRecipes, addRecipe, removeRecipe, editRecipe } = useContext(RecipesContext);
  const [ open, setOpen ] = useState(false);
  const [ recipeToDelete, setRecipeToDelete ] = useState<number>();
  const [ searchText, handleSearchTextChange, resetSearchText ] = useInputState('');
  const [ openCreateRecipe, setOpenCreateRecipe ] = useState(false);

  const [ recipeToEdit, setRecipeToEdit ] = useState();

  useEffect(() => {
    getRecipesFromAPI()
      .then(res => setRecipes(res));
  }, []);

  const deleteRecipe = () => {
    if (recipeToDelete) {
      deleteRecipeById(recipeToDelete).then(() => {
        removeRecipe(recipeToDelete);
      })
    }
    handleClose();
  }

  const handleClickOpen = (recipeIdToDelete: number) => {
    setRecipeToDelete(recipeIdToDelete);
    setOpen(true);
  };

  const handleAddRecipe = (recipe: Recipe) => {
    createNewRecipe(recipe)
      .then((createdRecipe) => addRecipe(createdRecipe))
      .finally(handleCloseRecipe);
  }

  const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchTextChange(evt);
    getRecipesFromAPI(`?name=${evt.target.value}`)
      .then(res => setRecipes(res));
  }

  const handleEditRecipe = (recipeId: number, recipe: Recipe) => {
    editRecipeById(recipeId, recipe)
      .then(() => editRecipe(recipeId, recipe))
      .finally(handleCloseRecipe);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseRecipe = () => {
    setOpenCreateRecipe(false);
    setRecipeToEdit(null);
  };

  const handleOpenCreateRecipe = (recipeId: number) => {
    const recipe: Recipe | undefined = recipes.find(recipe => recipeId === recipe.id);
    if (recipe) setRecipeToEdit(recipe);
    setOpenCreateRecipe(true);
  }

  const openRecipeModal = () => {
    setOpenCreateRecipe(true);
  }

  const goToRecipeDetail = (id: number) => {
    history.push(`/recipe/${id}`);
  }

  const renderModalConfirm = () => (
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
        <Button onClick={handleClose}>
          Disagree
        </Button>
        <Button onClick={deleteRecipe} primary>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );

  const renderModalCreateRecipe = () => (
    <Dialog
      open={openCreateRecipe}
      onClose={handleCloseRecipe}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{recipeToEdit ? 'Edit recipe' : 'Add new recipe to list'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <CreateRecipeForm addRecipe={handleAddRecipe} recipe={recipeToEdit} editRecipe={handleEditRecipe} />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );

  return (
    <div>
      {renderModalConfirm()}
      {renderModalCreateRecipe()}

      <Button primary rounded onClick={openRecipeModal}>Create recipe</Button>
      <SearchInput
        onChange={handleSearch}
        value={searchText}
        placeholder="Search for a recipe..." />
      <RecipeList
        recipes={recipes}
        deleteRecipe={(id: number) => handleClickOpen(id)}
        goToRecipeDetail={(id: number) => goToRecipeDetail(id)}
        editRecipe={(id: number) => handleOpenCreateRecipe(id)} />
    </div>
  );
}

export default RecipesListContainer;
