import * as actionType from '../actions/actionTypes'

const initialState = {
    favoriteList : [],
    favpriteItem : null,
    inputSearchedRecipe : null,
    eachRecipe : null
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionType.RECEPIENAME_UPDATED : return {
            ...state,
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
                    ...state,
                    favoriteList : state.favoriteList.filter(el => el.id !== ONG.id).concat(ONG),
                    favoriteItem : ONG
                }
            
        default : return state
    }
}

export default reducer
