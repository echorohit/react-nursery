import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import ChangeBg from './ChangeBg'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  ChangeBg
})

export default todoApp