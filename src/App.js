import React, { Component } from 'react';
import store from './store'

class App extends Component {
  componentWillMount() {
    store.dispatch({ type: "INC", payload: 1})
    store.dispatch({ type: "INC", payload: 1})
    store.dispatch({ type: "INC", payload: 1})
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
