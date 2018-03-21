import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Executions from './screens/Executions';
import NavBar from './containers/NavBar';
import PageNotFound from './screens/PageNotFound';
import './App.css';

class App extends Component {

  render() {
    return (
        <div className="App">
          <Switch>
            <Route path='/signin' exact component={Login}/>
            <NavBar>
              <Route path='/' exact component={Dashboard}/>
              <Route path="/executions" exact component={Executions} />
            </NavBar>
            <PageNotFound />
          </Switch>
        </div>
    );
  }
}

export default App;
