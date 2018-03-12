import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Onboarding from './containers/onboarding';
import axios from 'axios';
import './App.css';
import Main from './containers/Main';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Switch>
            {["/signin", "/signup"].map(path =>
                <Route path={path} component={Onboarding} />
            )}
          <Main />
        </Switch>
      </div>
    );
  }
}

export default App;
