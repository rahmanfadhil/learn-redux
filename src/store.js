import { combineReducers, applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let initialState = {
  fetching: false,
  fetched: false,
  user: {},
  error: null
}

const userReducer = (state=initialState, action) => {
  // let new_state = {...state}
  switch(action.type) {
    case "FETCH_USER_START": {
      return {...state, fetching: true};
      break;
    }
    case "FETCH_USER_ERROR": {
      return {...state, fetching: false, error: action.payload };
      break;
    }
    case "RECIEVE_USER": {
      return {...state, fetching: false, fetched: true, user: action.payload };
      break;
    }
  }
  return state
}

const reducers = combineReducers({
  user: userReducer
})

const middleware = applyMiddleware(thunk, logger)

const store = createStore(reducers, middleware)

store.subscribe(() => {
  console.log("store is change", store.getState());
})

export default store
