import React, { Component } from 'react';


export default (ComposedComponent) => {

  class Authentication extends Component {

    render() {

      console.log("render", ComposedComponent);

      return <ComposedComponent {...this.props } />

    };


  };

  return Authentication;

};
