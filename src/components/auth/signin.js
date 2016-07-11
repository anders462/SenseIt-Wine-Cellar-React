import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form'; //take care of redux connection, and form handling
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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

  renderAlert(){
    if (this.props.errorMessage){
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }


  render() {

    const { handleSubmit, fields: { username, password,passwordConfirm } } = this.props;

    return (
    <ReactCSSTransitionGroup
       transitionName="formFadeIn"
       transitionAppear={true}
       transitionAppearTimeout={500}>
    <form className="signin" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <h4>Sign in</h4>
        <div className="form-group">
          <label>Username</label>
          <input {...username } type="text" className="form-control" placeholder="Username"/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input {...password} type="password" className="form-control" placeholder="Password"/>
        </div>
        {this.renderAlert()}
        <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
  </ReactCSSTransitionGroup>
    )
  }
}

function mapStateToProps(state){
  return { errorMessage: state.auth.error}
}
//
// connect first argument is mapStateToProps , 2nd is mapDispatchToProps
// reduxForm 1st argument is config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'signin',
  fields: ['username','password', 'passwordConfirm'] //make them avaiable on this.props
},mapStateToProps, actions )(SignIn);
