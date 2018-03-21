import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Onboarding from './containers/onboarding';
import Dashboard from './screens/Dashboard';
import PageNotFound from './screens/PageNotFound';
import './App.css';

class App extends Component {

  render() {
    return (
        <div className="App">
          <Switch>
            <Route path='/signin' exact component={Onboarding}/>
            <Route path='/' exact component={Dashboard}/>
            <PageNotFound />
          </Switch>
        </div>
    );
  }
}

export default App;
