import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={6} sm={12}>
            <p>Dashboard content</p>
          </Grid>
          <Grid item xs={6} sm={12}>
            <p style={{textAlign: 'center'}}>Dashboard content</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
