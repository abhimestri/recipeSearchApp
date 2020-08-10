import * as actionType from '../actions/actionTypes'

const initialState = {
    favList: [],
    inputSearchedRecipe: null,
    eachRecipe: null
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.UPDATE_NEW_SEARCHED_RECIPE: return {
            ...state,
            inputSearchedRecipe: action.recipeName
        }
        case actionType.UPDATE_SEARCHED_RECIPE_DETAILS:
            return {
                ...state,
                eachRecipe: action.recipeData
            }
        case actionType.UPDATE_FAVORITES_LIST:
            return {
                ...state,
                favList: state.favList.concat(action.favoritesListArray)
            }

        default: return state
    }
}

export default reducer
