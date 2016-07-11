import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Header from './common/header';


export default class App extends Component {

  //declare so we get access to this.context.router
  //only use context with router
 static contextTypes = {
    router: PropTypes.object
    };

  render() {
      console.log(this.context);
    return (
      <div className="">
        <Header />
        {this.props.children}
      </div>
    )
  }
}
