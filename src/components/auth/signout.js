import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import * as actions from '../../actions';



export default class SignOut extends Component {

  componentWillMount(){
    this.props.signoutUser();
    setTimeout(() => {
      browserHistory.push('/home');
    },1500);

  }

  render() {

    return (
      <div>
        <h4>Please come back soon...</h4>
      </div>
    )
  }
}

export default connect(null,actions)(SignOut);
