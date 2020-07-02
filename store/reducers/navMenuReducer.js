import * as types from '../types'

const initialState = {
    content: {},
    loading: false,
    error: null
}

export const navMenuReducer = (state = initialState, action) => {
    switch (action.type){
        case types.NAV_URL_HOME:
            return{
                ...state,
                content: action.payload,
                loading: false,
                error: null
            }
        case types.NAV_URL_PAGE1:
            return{
                ...state,
                content: action.payload,
                loading: false,
                error: null
            }   
        case types.NAV_URL_PAGE2:
            return{
                ...state,
                content: action.payload,
                loading: false,
                error: null
            }                                    
        default:
            return state;
    }
}