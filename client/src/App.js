import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import NavBar from './containers/NavBar';
import PageNotFound from './screens/PageNotFound';
import NavBarRoutes from './routes/navBarRoutes';
import Profile from './screens/Profile';


import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <NavBar>
                    <Switch>
                        {NavBarRoutes.map((route) => (
                            <Route path={route.path} exact component={route.component} />
                        ))}
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
