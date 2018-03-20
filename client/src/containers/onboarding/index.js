import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import Login from './Login';

class Onboarding extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/signIn" component={Login} />
                </Switch>
            </div>
        );
    }
}

export default Onboarding;
