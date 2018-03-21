import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import NavBar from './containers/NavBar';
import PageNotFound from './screens/PageNotFound';
import Dashboard from './screens/Dashboard';
import Executions from './screens/Executions';
import Feed from './screens/Feed';


import './App.css';

class App extends Component {

  render() {
    return (
        <div className="App">
          <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/executions" exact component={Executions} />
            <Route path="/feed" exact component={Feed} />
            <Route component={PageNotFound}/>
          </Switch>
        </div>
    );
  }
}

export default App;
