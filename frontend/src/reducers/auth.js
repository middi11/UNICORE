import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    AUTHENTICATICATED_SUCCESS,
    AUTHENTICATICATED_FAIL,
    LOGOUT
} from '../actions/types'

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case AUTHENTICATICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access)
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh
            }

        case AUTHENTICATICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false
            }

        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null
            }

        default:
            return state
    }
}