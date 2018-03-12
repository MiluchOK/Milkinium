import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

let LoginForm = props => {
    const { handleSubmit } = props;
    return (<form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email" />
        </div>
    </form>)
};

class Login extends Component {

    render() {
        return (
            <div>
                <p>Login Screen</p>
                <LoginForm/>
            </div>
        );
    }
}

LoginForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);

export default Login;
