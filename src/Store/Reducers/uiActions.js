import * as actionType from '../actions/actionTypes'
import {updatedObject} from '../../shared/utility'

const initialState = {
    backdrop : false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.BACKDROP_HANDLING : return updatedObject(state , {backdrop : action.Backdrop})
        default : return state
    }
}

export default reducer
