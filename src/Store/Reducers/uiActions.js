import * as actionType from '../actions/actionTypes'
import {updatedObject} from '../../shared/utility'

const initialState = {
    backdrop : false,
    drawerShow : "sideDrawer"
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.BACKDROP_HANDLING : return updatedObject(state , {backdrop : action.Backdrop})
        case actionType.DRAWER_TOGGELER : return updatedObject(state , {drawerShow : action.DrawerShow})
        default : return state
    }
}

export default reducer
