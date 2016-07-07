import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form'; //take care of redux connection, and form handling
import { Link } from 'react-router'
import * as actions from '../../actions';


class SignIn extends Component {

  //declare so we get access to this.context.router
  //only use context with router
  static contextTypes = {
    router: PropTypes.object
  };

  handleFormSubmit(username,password){
    this.props.signinUser(username,password);
  }


  render() {

    const { handleSubmit, fields: { username, password } } = this.props;
    return (
    <form className="signin" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="form-group">
          <label>Username</label>
          <input {...username } type="text" className="form-control" placeholder="Username"/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input {...password} type="password" className="form-control" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
    )
  }
}


//
// connect first argument is mapStateToProps , 2nd is mapDispatchToProps
// reduxForm 1st argument is config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'signin',
  fields: ['username','password'] //make them avaiable on this.props
},null, actions )(SignIn);
