import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import _ from 'lodash';
import {connect} from 'react-redux';
import List from 'material-ui/List';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import {bindActionCreators} from 'redux';
import Grid from 'material-ui/Grid';
import compose from 'recompose/compose';
import AddIcon from 'material-ui-icons/Add';
import Execution from './../components/ExecutionRow';
import {getCases} from '../redux/actions/casesActions';
import InboxIcon from 'material-ui-icons/Inbox';
import NoResults from '../components/NoResults';

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

    handleAddCase() {
        console.log("Adding a new case!")
    }

    componentWillMount() {
        this.props.getCases();
    }

    renderCases() {
        const cases = this.props.cases;

        if (_.isEmpty(cases)) {
            return <NoResults/>
        }

        const elements = _.map(cases, (c => (
            <Execution
                title={c.title}
                icon={<InboxIcon />}
                key={c._id}
            />
        )));
        console.log(elements.class);
        console.log(`First element is ${elements[0]}`);
        return elements;
    }

    render() {

        const {classes, theme} = this.props;

        return (

            <Grid style={{flex: 1}}>
                <div className={classes.root}>
                    <List component="nav">
                        {this.renderCases()}
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

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        getCases: getCases
    }, dispatch)
}

const mapStateToProps = (state) => {
    const cases = state.cases.get('casesById');
    return {cases: cases}
};


export default compose(
    withStyles(styles, {withTheme: true}),
    connect(mapStateToProps, matchDispatchToProps)
)(Cases);