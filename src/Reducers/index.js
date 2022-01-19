/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux'

const myLogger = (store) => {
  return (next) => {
    return (action) => {
      console.log('middleware ran')
    }
  }
}

const initialState = {
  admin: '',
  sidebarShow: true,
  activeObject: '',
  email: '',
  password: '',
  isSignedIn: false,
  isUser: false,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {
        ...state,
        ...rest,
      }
    case 'ADMIN':
      return { ...state.admin, ...rest }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  stating: changeState,
})

export default rootReducer
