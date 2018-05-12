import React, { Component } from 'react';
import store from './store'

class App extends Component {
  componentWillMount() {
    store.dispatch({ type: "CHANGE_NAME", payload: "Rahman"})
    store.dispatch({ type: "CHANGE_AGE", payload: 14})
    store.dispatch({ type: "CHANGE_AGE", payload: 16})
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
