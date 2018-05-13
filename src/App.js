import React, { Component } from 'react';
// import store from './store'
import axios from 'axios';
import { connect } from 'react-redux'

@connect((state) => {
  return {
    user: state.user
  }
})
class App extends Component {
  componentWillMount() {
    this.props.dispatch({
      type: "FETCH_USER",
      payload: axios.get('https://api.github.com/users/rahmanfadhil')
    })
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
