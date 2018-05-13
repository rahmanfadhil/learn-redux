import React, { Component } from 'react';
// import store from './store'
import axios from 'axios';
import { connect } from 'react-redux'

class App extends Component {
  componentWillMount() {
    this.props.fetchUser('rahmanfadhil')
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Hello World</h1>
        {(this.props.user.fetched === true) ? (
          <div>
            <h2>{this.props.user.user.login}</h2>
            <img align="left" src={this.props.user.user.avatar_url} alt=""/>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
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
