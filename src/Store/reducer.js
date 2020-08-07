const initialState = {
    inputSearchedRecipe : "",
    eachRecipe : null
}

const reducer = (state = initialState, action) => {
    if(action.type === 'RECEPIENAME_UPDATED'){
        return {
            inputSearchedRecipe : action.recipeName
        }
    }
    if(action.type === 'EACHRECIPE_DETAILS'){
        return {
            ...state,
            eachRecipe : action.recipeData
        }
    }
    return state
}

export default reducer