import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Onboarding from './containers/onboarding';
import axios from 'axios';
import './App.css';
import Main from './screens/Main';
import routes from './routes/routes';

class App extends Component {

  render() {
    const r = routes.onboarding;
    return (
      <div className="App">
        <Switch>
            {r.map(path =>
                <Route path={path} component={Onboarding} />
            )}
          <Main />
        </Switch>
      </div>
    );
  }
}

export default App;
