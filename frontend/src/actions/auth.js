import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    AUTHENTICATICATED_SUCCESS,
    AUTHENTICATICATED_FAIL,
    LOGOUT
} from './types'
import axios from 'axios'
import { toast } from 'react-toastify'
import { load_user } from './profile';

export const checkAuthenticated = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }

        const body = JSON.stringify({ token: localStorage.getItem('access') })

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`, body, config)

            if (res.data.code !== 'token_not_valid') {
                dispatch({
                    type: AUTHENTICATICATED_SUCCESS
                })
            } else {
                dispatch({
                    type: AUTHENTICATICATED_FAIL
                })
            }

        } catch (error) {
            dispatch({
                type: AUTHENTICATICATED_FAIL
            })
        }

    } else {
        dispatch({
            type: AUTHENTICATICATED_FAIL
        })
    }
}

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password })

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, body, config)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(load_user())

    } catch (error) {

        dispatch({
            type: LOGIN_FAIL
        })
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}