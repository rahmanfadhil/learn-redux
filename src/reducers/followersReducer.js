const userReducer = (state={
  fetching: false,
  fetched: false,
  followers: [],
  error: null
}, action) => {
  // let new_state = {...state}
  switch(action.type) {
    case "FETCH_FOLLOWERS_PENDING": {
      return {...state, fetching: true};
    }
    case "FETCH_FOLLOWERS_FULFILLED": {
      return {...state, fetching: false, fetched: true, followers: action.payload.data };
    }
    case "FETCH_FOLLOWERS_REJECTED": {
      return {...state, fetching: false, error: action.payload };
    }
    default: {
      return state
    }
  }
}

export default userReducer
