import axios from 'axios'
import {
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
} from './types'

export const load_user = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json',
            }
        }

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/users/me/`, config)

            dispatch({
                type: LOAD_USER_SUCCESS,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: LOAD_USER_FAIL
            })
        }
    } else {
        dispatch({
            type: LOAD_USER_FAIL
        })
    }

}

