import { combineReducers } from 'redux'
import login from './login'
//import user from './user'

const todoApp = combineReducers({
  login,
})

export default todoApp