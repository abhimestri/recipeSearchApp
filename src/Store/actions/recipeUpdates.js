import * as actionTypes from './actionTypes'

export const recipeNameUpdated = (nameOfRecipe) => {
    return {
        type : actionTypes.RECEPIENAME_UPDATED,
        recipeName : nameOfRecipe
    }
}

export const eachRecipeDetails = (eachRecipeData) => {
    return {
        type : actionTypes.EACHRECIPE_DETAILS,
        recipeData : eachRecipeData
    }
}

export const addToFavorites = (name) => {
    return {
        type : actionTypes.ADDTOFAVORITES,
        favoritesListArray : name
    }
}