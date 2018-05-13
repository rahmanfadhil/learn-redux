import React, { Component } from 'react';
// import store from './store'
import axios from 'axios';
import { connect } from 'react-redux'

class App extends Component {
  componentWillMount() {
    this.props.fetchUser('name')
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

export default connect(
  (state) => ({
    user: state.user
  }),
  (dispatch) => ({
    fetchUser: (username) => {
      dispatch({ type: "FETCH_USER", payload: axios.get(`https://api.github.com/users/${username}`)})
    }
  })
)(App);
