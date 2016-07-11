import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import emailValidator from 'email-validator';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as actions from '../../actions';


 class SignUp extends Component {


  handleFormSubmit(formProps){
    this.props.signupUser(formProps)
  };

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

    const { handleSubmit,
            fields: {
              username,
              password,
              passwordConfirm,
              email,
              firstName,
              lastName
            }} = this.props;

    return (
      <ReactCSSTransitionGroup
         transitionName="formFadeIn"
         transitionAppear={true}
         transitionAppearTimeout={500}>
      <form className="signup" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <h4>Sign up</h4>
          <div className="form-group">
            <label>Username</label>
            <input {...username } type="text" className="form-control" placeholder="Username"/>
              {username.touched && username.error && <div className="error">{username.error}</div>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input {...password} type="password" className="form-control" placeholder="Password"/>
              {password.touched && password.error && <div className="error">{password.error}</div>}
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input {...passwordConfirm} type="password" className="form-control" placeholder="Password"/>
            {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input {...email } type="text" className="form-control" placeholder="my_email@gmail.com"/>
              {email.touched && email.error && <div className="error">{email.error}</div>}
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input {...firstName} type="text" className="form-control" placeholder="First Name"/>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input {...lastName} type="text" className="form-control" placeholder="Last Name"/>
          </div>
          {this.renderAlert()}
          <button type="submit" className="btn btn-primary">Sign up!</button>
      </form>
    </ReactCSSTransitionGroup>
    )
  }
}


function validate(formProps){
  //refactor to condense!!!!
  const errors = {};
  if (!formProps.password){
    errors.password = "Please enter password";
  }
  if (formProps.password){
    if (formProps.password.length < 8){
      errors.password = "Please enter at least a 8 character password"
    }
    if (formProps.password.length > 16){
      errors.password = "Maximum 16 character password, sorry!"
    }
  }
  if (formProps.password !== formProps.passwordConfirm){
    errors.passwordConfirm = "Passwords must match";
  }
  if (!formProps.passwordConfirm){
    errors.passwordConfirm = "Please enter password confirmation";
  }
  if (!formProps.username){
    errors.username = "Please enter username";
  }
  if (formProps.username){
    if (formProps.username.length < 5){
      errors.username = "Please enter at least a 5 character username";
    }
  }
  if (!formProps.email){
    errors.email = "Please enter email";
  }
  if (formProps.email){
    if (!emailValidator.validate(formProps.email) ){
      errors.email = "Email not valid";
    }
  }
  return errors;
}

function mapStateToProps(state){
  return { errorMessage: state.auth.error}
}

export default reduxForm({
  form: 'signup',
  fields: [
  'username',
  'password',
  'passwordConfirm',
  'email',
  'firstName',
  'lastName'],
  validate
},
mapStateToProps, actions)(SignUp);
