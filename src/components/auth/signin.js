import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form'; //take care of redux connection, and form handling
import { Link } from 'react-router'
import { loginUser } from '../actions/index';

export default class SignIn extends Component {

  //declare so we get access to this.context.router
  //only use context with router
  static contextTypes = {
    router: PropTypes.object
  };



  render() {

    return (
    <form className="signin">
        <div className="form-group">
          <label >Email address</label>
          <input type="email" className="form-control" placeholder="Email"/>
        </div>
        <div className="form-group">
          <label >Password</label>
          <input type="password" className="form-control" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    )
  }
}

// function validate(){
//
// }
//
// // connect first argument is mapStateToProps , 2nd is mapDispatchToProps
// //reduxForm 1st argument is config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
// export default reduxForm({
//   form: 'Login',
//   fields: ['username','password'],
//   validate
// },null, { loginUser })(SignIn);
