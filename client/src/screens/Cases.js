import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import List from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import {bindActionCreators} from 'redux';
import Grid from 'material-ui/Grid';
import compose from 'recompose/compose';
import AddIcon from 'material-ui-icons/Add';
import Execution from './../components/ExecutionRow';
import { getCases } from '../redux/actions/casesActions';

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

    componentWillMount(){
        this.props.getCases()
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

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        getCases: getCases
    }, dispatch)
}

const mapStateToProps = (state) => {
    return {cases: state.cases}
};


export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps, matchDispatchToProps)
)(Cases);