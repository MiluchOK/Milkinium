import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import List from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import AddIcon from 'material-ui-icons/Add';
import Execution from './../components/ExecutionRow';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
    },

    fab: {
        position: 'fixed',
        zIndex: 10000,
        bottom: 30,
        right: 20,
    },
});

class Cases extends Component {

    handleAddCase(){
        console.log("Adding a new case!")
    }

    getCases(){
        return [{_id: 1}, {_id: 2}]
    }

    render() {

        const { classes, theme } = this.props;

        const cases = this.getCases();

        return (

            <Grid style={{flex: 1}}>
                <div className={classes.root}>
                <List component="nav">
                    {cases.map((e => (
                        <Execution key={e._id}/>
                    )))}
                </List>

                <Button variant="fab"
                        onClick={this.handleAddCase}
                        color="primary"
                        aria-label="add"
                        className={classes.fab}>
                    <AddIcon />
                </Button>
                </div>
            </Grid>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Cases);