const userReducer = (state={
  fetching: false,
  fetched: false,
  user: {},
  error: null
}, action) => {
  // let new_state = {...state}
  switch(action.type) {
    case "FETCH_USER_PENDING": {
      return {...state, fetching: true};
    }
    case "FETCH_USER_FULFILLED": {
      return {...state, fetching: false, error: action.payload };
    }
    case "FETCH_USER_REJECTED": {
      return {...state, fetching: false, fetched: true, user: action.payload };
    }
    default: {
      return state
    }
  }
}

export default userReducer
