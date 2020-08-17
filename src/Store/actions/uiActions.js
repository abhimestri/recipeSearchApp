import * as actionTypes from './actionTypes'


export const backdropHandling = (backdrop) => {
    return {
        type : actionTypes.BACKDROP_HANDLING,
        Backdrop : backdrop
    }
}