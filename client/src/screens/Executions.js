import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';

class Executions extends Component {

  render() {
    return (
        <div>
          <Grid container>
            <Grid item xs={6} sm={12}>
              <p>Executions screen</p>
            </Grid>
            <Grid item xs={6} sm={12}>
              <p style={{textAlign: 'center'}}>Execution stuff</p>
            </Grid>
          </Grid>
        </div>
    );
  }
}

export default Executions;
