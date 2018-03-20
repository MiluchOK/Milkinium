import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import MainTest from './MainTest';
import PageNotFound from './PageNotFound';
import Dashboard from './Dashboard';
import routes from '../routes/routes';

class Main extends Component {

  render() {
    const r = routes.dashboard;
    return (
      <div>
        <Switch>
          // <Route path="/dashboard" component={Dashboard} />
          {r.map(path =>
              <Route path={path} component={Dashboard} />
          )}
          <PageNotFound />
        </Switch>
      </div>
    );
  }
}

export default Main;
