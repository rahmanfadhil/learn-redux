import { createStore } from 'redux'

const reducer = (state, action) => {
  switch(action.type){
    case "INC":
      return state+action.payload
      break;
    case "DEC":
      return state-action.payload
      break;
  }
  return state;
}

const store = createStore(reducer, 0)

store.subscribe(() => {
  console.log("store is change", store.getState());
})

export default store
