import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import List from 'material-ui/List';
import Grid from 'material-ui/Grid';
import Execution from './../components/ExecutionRow';

class Cases extends Component {

    render() {

        const cases = [
            {}, {}, {}
        ];

        return (
            <Grid style={{flex: 1}}>
                <List component="nav">
                    {cases.map((e => (
                        <Execution />
                    )))}
                </List>
            </Grid>
        );
    }
}

export default Cases;
