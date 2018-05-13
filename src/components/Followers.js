import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

class Followers extends Component {
  componentWillMount() {
    this.props.fetchFollowers('rahmanfadhil')
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Followers</h1>
        {this.props.followers.followers.map((item, index) => (
          <p key={index}>
            <a href={item.html_url}>{item.login}</a>
          </p>
        ))}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    followers: state.followers
  }),
  (dispatch) => ({
    fetchFollowers: (username) => {
      dispatch({ type: "FETCH_FOLLOWERS", payload: axios.get(`https://api.github.com/users/${username}/followers`)})
    }
  })
)(Followers);
