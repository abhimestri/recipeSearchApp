import * as actionTypes from './actionTypes'
import axios from '../../axiosinstance'

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

export const addToDataBaseStart = () => {
    return {
        type : actionTypes.STORETODATABASE_START
    }
}

export const addToDataBaseSuccess = (data) =>{
    return {
        type : actionTypes.STORETODATABASE_SUCCESS,
        favList : data
    }
}

export const addToDataBaseFailed = (err) => {
    return {
        type : actionTypes.STORETODATABASE_FAILED,
        error : err
    }
}

export const addFavoritesListToDatabase = ( presentData) => {
    return dispatch => {
        dispatch(addToDataBaseStart())
        axios.post('/favorites.json' , presentData)
                .then(res => {
                    console.log(res)
                    dispatch(addToDataBaseSuccess(res))
                })
                .catch(err => {
                    console.log(err)
                    dispatch(addToDataBaseFailed())
                })
    }
}