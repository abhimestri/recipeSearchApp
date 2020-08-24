import * as actionType from '../actions/actionTypes'
import {updatedObject} from '../../shared/utility'

const initialState = {
    inputSearchedRecipe : null,
    eachRecipe : null,
    favoritesListFromDatabase : [],
    error : null
}


const storeToDatabaseSuccess = (state ,action) => {
        return updatedObject(state , {
            favoritesListFromDatabase : action.favList
        })
    
}
const storeToDatabaseFailed = (state ,action) => {
    return updatedObject(state , {
        error: action.error
    })

}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionType.RECEPIENAME_UPDATED : return updatedObject(state , {inputSearchedRecipe : action.recipeName})
        case actionType.EACHRECIPE_DETAILS : return updatedObject(state , {eachRecipe : action.recipeData})
        case actionType.STORETODATABASE_SUCCESS : return storeToDatabaseSuccess(state , action)
        case actionType.STORETODATABASE_FAILED : return storeToDatabaseFailed(state ,action)
        default : return state
    }
}

export default reducer
