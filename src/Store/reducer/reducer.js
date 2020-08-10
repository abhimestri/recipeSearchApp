import * as actionType from '../actions/actionTypes'

const initialState = {
    favList: [],
    inputSearchedRecipe: null,
    eachRecipe: null
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.RECEPIENAME_UPDATED: return {
            ...state,
            inputSearchedRecipe: action.recipeName
        }
        case actionType.EACHRECIPE_DETAILS:
            return {
                ...state,
                eachRecipe: action.recipeData
            }
        case actionType.ADDTOFAVORITES:
            return {
                ...state,
                favList: state.favList.concat(action.favoritesListArray)
            }

        default: return state
    }
}

export default reducer
