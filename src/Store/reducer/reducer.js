import * as actionType from '../actions/actionTypes'

const initialState = {
    aray : [],
    inputSearchedRecipe : null,
    eachRecipe : null
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionType.RECEPIENAME_UPDATED : return {
            inputSearchedRecipe : action.recipeName
        }
        case actionType.EACHRECIPE_DETAILS : 
            return {
                ...state,
                eachRecipe : action.recipeData
            }
        case actionType.ADDTOFAVORITES :
                let ONG = action.favoritesListArray
                return {
                    ...initialState,
                    aray : initialState.aray.concat(ONG)
                }
            
        default : return state
    }
}

export default reducer
