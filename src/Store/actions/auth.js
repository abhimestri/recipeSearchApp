import * as actionTypes from './actionTypes';
import axios from 'axios'

export const authStart = () => {
    return {
        type : actionTypes.AUTH_START
    }
}

export const authStatus = (status) => {
    return {
        type : actionTypes.IS_SIGNEDIN,
        signedInStatus : status
    }
}

export const authSuccess = (token , userId) => {
    return {
        type : actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId : userId
    }
}

export const authFailed = error => {
    return {
        type : actionTypes.AUTH_FAILED,
        error : error
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userId')
    return {
        type : actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeOut = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        } , expirationTime * 100000)
    }
}

export const auth = (email , password , signedInStatus) => {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            email : email,
            password : password,
            returnSecureToken : true
        }

        let url 
        if(!signedInStatus){
            console.log("in auth actions status is : " , signedInStatus)
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDURz_09aOuPrtmxDv5vgWq4_7jAeOZsiA"
        }else{
            console.log("in auth actions status is : " , signedInStatus)
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDURz_09aOuPrtmxDv5vgWq4_7jAeOZsiA"
        }

        axios.post(url , authData)
                .then(response => {
                    console.log(response)
                    const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
                    localStorage.setItem('token' , response.data.idToken)
                    localStorage.setItem('expirationDate' , expirationDate)
                    localStorage.setItem('userId' , response.data.localId)
                    dispatch(authSuccess(response.data.idToken , response.data.localId))
                    dispatch(checkAuthTimeOut(response.data.expiresIn))
                })
                .catch(error => {
                    console.log(error);
                    // dispatch(authFailed(error.response.data.error))
                });
    }
}

export const authCheckStatus = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(logout())
        }else{
            const expirationTime = new Date(localStorage.getItem('expirationDate'))
            if(expirationTime < new Date()){
                dispatch(logout)
            }else{
                const userID = localStorage.getItem('userId');
                dispatch(authSuccess(localStorage.getItem('token') , userID))
                dispatch(checkAuthTimeOut((expirationTime.getTime() - new Date().getTime()) / 100000 ))
            }
        }
    }
}