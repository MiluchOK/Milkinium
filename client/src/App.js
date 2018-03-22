import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import NavBar from './containers/NavBar';
import PageNotFound from './screens/PageNotFound';
import Dashboard from './screens/Dashboard';
import Executions from './screens/Executions';
import Profile from './screens/Profile';
import Feed from './screens/Feed';


import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <NavBar>
                    <Switch>
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/executions" exact component={Executions}/>
                        <Route path="/feed" exact component={Feed}/>
                        <Route path="/profile" exact component={Profile}/>
                        {/*TODO Fix 404 rendering with NavBar*/}
                        <Route component={PageNotFound}/>
                    </Switch>
                </NavBar>
            </div>
        );
    }
}

export default App;
