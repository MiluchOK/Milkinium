import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import MainTest from './MainTest';
import PageNotFound from './PageNotFound';
import DashboardContent from './DashboardContent';
import NavBar from '../containers/NavBar';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <NavBar>
          <DashboardContent />
        </ NavBar>
      </div>
    );
  }
}

export default Dashboard;
