
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router';


class  Header extends Component {


renderLinks(){
  if (this.props.authenticated){
    return (
        <li><Link to='/signout'><span className="glyphicon glyphicon-log-out"></span> Sign Out</Link></li>
    )
  } else {
    return [
          <li key={1}><Link to='/signin'><span className="glyphicon glyphicon-log-in"></span> Sign In</Link></li>,
          <li key={2}><Link to='/signup'><span className="glyphicon glyphicon-log-in"></span> Sign Up</Link></li>
          ];
  }
};

render(){
  return (
    <nav className="navbar navbar-inverse" >
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">CellarSense</a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li className="active"><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/resources'>Resources</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/dashboard'><i className="fa fa-tachometer" aria-hidden="true"></i> Dashboard</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
           {this.renderLinks()}
         </ul>
        </div>
      </div>
    </nav>

  )

}



}

function mapStateToProps(state){
  return { authenticated: state.auth.authenticated }
};

export default connect(mapStateToProps)(Header);
