import React, { createContext, useContext, useReducer } from "react"

// Prepare the datalayer
export const StateContext = createContext()

// Higher Order Component.. use to wrap the App
// useReducer returns a tuple of [state, dispatch] set to value
// in the Provider component
// go to reducer.js
export const StateProvider = ({ reducer, initialState, children }) =>
  (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  )

// Whenever want to pull something from the data layer use UseStateValue hook
export const useStateValue = () => useContext(StateContext)

