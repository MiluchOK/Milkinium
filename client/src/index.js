import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store';
import Login from './screens/Login';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/signin' exact component={Login}/>
          <Route path="/" component={App}/>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
