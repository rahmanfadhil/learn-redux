import { combineReducers } from 'redux'
import userReducer from './userReducer'

// combine reducers
const reducers = combineReducers({
  user: userReducer
})

export default reducers
