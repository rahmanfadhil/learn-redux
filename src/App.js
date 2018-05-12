import React, { Component } from 'react';
import store from './store'
import axios from 'axios';

class App extends Component {
  componentWillMount() {
    // store.dispatch(dispatch => {
    //   dispatch({type: "FETCH_USER_START"})
    //   axios.get('https://api.github.com/users/rahmanfadhil')
    //   .then(data => {
    //     dispatch({ type: "RECIEVE_USER", payload: data.data})
    //   }).catch(err => {
    //     dispatch({type: "FETCH_USER_ERROR", payload: err})
    //   })
    // })
    store.dispatch({
      type: "FETCH_USER",
      payload: axios.get('https://api.github.com/users/rahmanfadhil')
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
