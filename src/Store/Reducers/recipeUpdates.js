import * as actionType from '../actions/actionTypes'
import {updatedObject} from '../../shared/utility'

const initialState = {
    favoriteList : [],
    favpriteItem : null,
    inputSearchedRecipe : null,
    eachRecipe : null
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionType.RECEPIENAME_UPDATED : return updatedObject(state , {inputSearchedRecipe : action.recipeName})
        case actionType.EACHRECIPE_DETAILS : return updatedObject(state , {eachRecipe : action.recipeData})
        case actionType.ADDTOFAVORITES :
                let favList = state.favoriteList.filter(el => el.id !== action.favoritesListArray.id).concat(action.favoritesListArray)
                return updatedObject(state , { favoriteList : favList})
        default : return state
    }
}

export default reducer
