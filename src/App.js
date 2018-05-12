import React, { Component } from 'react';
import store from './store'
import axios from 'axios';

class App extends Component {
  componentWillMount() {
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
