import * as actionType from '../actions/actionTypes'
import {updatedObject} from '../../shared/utility'

const initialState = {
    isSignedInAuth : false,
    token : null,
    userId : null,
    loading : false,
    error : null
}

const signedInStats = (state , action) => {
    return updatedObject(state , {
        isSignedInAuth : action.status
    })
}

const authStart = (state , action ) => {
    return updatedObject(state , {
        error : null,
        loading:true
    })
}

const authSuccess = (state , action ) => {
    return updatedObject (state , {
        token : action.idToken,
        userId : action.userId,
        error : null,
        loading : false
    })
}

const authFailed = (state , action) => {
    return updatedObject(state, {
        error : action.error,
        loading : false
    })
}

const authLogout = (state , action) => {
    return updatedObject(state , {
        token : null,
        userId : null
    })
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case actionType.IS_SIGNEDIN : return signedInStats(state , action)
        case actionType.AUTH_START : return authStart(state , action)
        case actionType.AUTH_SUCCESS : return authSuccess(state , action)
        case actionType.AUTH_FAILED : return authFailed(state , action)
        case actionType.AUTH_LOGOUT : return authLogout(state , action)
        default : return state
    }
}

export default reducer