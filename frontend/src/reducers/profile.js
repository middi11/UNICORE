import {
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
} from '../actions/types'

const initialState = {
    name: "",
    role: ""
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                name: payload.name,
                role: payload.role
            }
        case LOAD_USER_FAIL:
            return {
                ...state,
                name: '',
                role: ''
            }

        default:
            return state
    }
}

