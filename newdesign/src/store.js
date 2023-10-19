import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    isConnected: false,
    token: null,
    user: null,
}

const connectUser = { type: 'connect' }
const disconnectUser = { type: 'disconnect' }
export const setToken = (token) => {
    return {
        type: 'setToken',
        payload: token
    }
}
export const setUser = (user) => {
    return {
        type: 'setUser',
        payload: user
    }
}

function reducer(state, action) {
    if (action.type === 'connect') {
        return {
            ...state,
            isConnected: true
        }
    }
    if (action.type === 'disconnect') {
        return {
            ...state,
            isConnected: false
        }
    }
    if (action.type === 'setToken') {
        return {
            ...state,
            token: action.payload
        }
    }
    if (action.type === 'setUser') {
        return {
            ...state,
            user: action.payload
        }
    }
    return state
}

export const store = configureStore({
    reducer: reducer,
    preloadedState: initialState
})