import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {
    response: ''
  };
  
  componentDidMount() {
    axios.get('/api/hello')
    .then(res => {
      this.setState({response: 'res'})
    })
  }
  
  render() {
    return (
      <div className="App">
        <p>Stuff</p>
        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default App;
