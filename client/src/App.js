import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './containers/Login';
import axios from 'axios';
import './App.css';
import Main from './containers/Main';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Main />
        </Switch>
      </div>
    );
  }
}

export default App;
