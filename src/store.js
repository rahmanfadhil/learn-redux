import { combineReducers, createStore } from 'redux'

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
  }
  return new_state
}

const tweetsReducer = (state=[], action) => {
  return state
}

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
})

const store = createStore(reducers)

store.subscribe(() => {
  console.log("store is change", store.getState());
})

export default store
