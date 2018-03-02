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
    .then((res) => {
      // console.log(`Got response: ${res.data.express}`)
      this.setState({response: res.data.express})
    })
  }
  
  render() {
    return (
      <div className="App">
        <p>Stuff</p>
        <p>Your response: {this.state.response}</p>
      </div>
    );
  }
}

export default App;
