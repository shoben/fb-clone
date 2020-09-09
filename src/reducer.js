import React from "react"

// Initial state of the reducer
export const initialState = {
  user: null
}

// Inside the data layer we can dispatch actions
export const actionTypes = {
  SET_USER: "SET_USER"
}

// Listen for the action and return the new state of the data layer
// Listen in this case to the SET_USER action
// Return the new state
// Change the user to whatever we passed in as a user payload as a result of the action
const reducer = (state, action) => {

  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      }
    default:
      return state;
  }
}

export default reducer