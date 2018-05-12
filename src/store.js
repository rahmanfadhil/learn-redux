import { combineReducers, applyMiddleware, createStore } from 'redux'

// const reducer = (state, action) => {
//   switch(action.type){
//     case "INC":
//       return state+action.payload
//       break;
//     case "DEC":
//       return state-action.payload
//       break;
//   }
//   return state;
// }

const userReducer = (state={}, action) => {
  let new_state = {...state}
  switch(action.type) {
    case "CHANGE_NAME": {
      new_state.name = action.payload;
      break;
    }
    case "CHANGE_AGE": {
      new_state.age = action.payload;
      break;
    }
    case "E": {
      throw new Error("AHHHHHHHH")
    }
  }
  return new_state
}

const reducers = combineReducers({
  user: userReducer
})

const logger = store => next => action => {
  console.log("action fired", action)
  next(action)
}

const error = store => next => action => {
  try {
    next(action)
  } catch(e) {
    console.log("AHH", e);
  }
}

const middleware = applyMiddleware(logger, error)

const store = createStore(reducers, middleware)

store.subscribe(() => {
  console.log("store is change", store.getState());
})

export default store
