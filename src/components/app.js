import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export default class App extends Component {

  //declare so we get access to this.context.router
  //only use context with router
 static contextTypes = {
    router: PropTypes.object
    };

  render() {
      console.log(this.context);
    return (
      <div>
        <h3>WineSense</h3>
        {this.props.children}
      </div>
    )
  }
}
