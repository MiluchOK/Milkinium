import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginForm from '../components/LoginForm';
import { signIn, getCurrentUser} from '../redux/actions/usersActions';

class Login extends Component {

  constructor(props) {
      super(props);
      this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn(values){
    this.props.signIn(values)
    .then((res) => {
        console.log(res);
        this.props.history.push('/')
    })
    .then(() => {
        this.props.getCurrentUser();
    })
  }

    render() {
        return (
            <div>
                <p>Login Screen</p>
                <LoginForm onSubmit={this.handleSignIn}/>
            </div>
        );
    }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
      signIn: signIn,
      getCurrentUser: getCurrentUser
  }, dispatch)
}

export default connect(null, matchDispatchToProps)(Login);
