import { combineReducers } from 'redux'
import userReducer from './userReducer'
import followersReducer from './followersReducer'

// combine reducers
const reducers = combineReducers({
  user: userReducer,
  followers: followersReducer
})

export default reducers
