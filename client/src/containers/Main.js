import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import MainTest from './MainTest';
import PageNotFound from './PageNotFound';

class Main extends Component {
  
  render() {
    return (
      <div>
        <Switch>
          <Route path="/main_test" component={MainTest} />
          <PageNotFound />
        </Switch>
      </div>
    );
  }
}

export default Main;
