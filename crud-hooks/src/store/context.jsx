import React from 'react'
import { reducer } from './reducer'
import { initialState } from "./state";

export const StateContext = React.createContext(initialState)
export const DispatchContext = React.createContext(undefined)

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}