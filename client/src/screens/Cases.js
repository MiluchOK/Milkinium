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
import {getCases, createCase} from '../redux/actions/casesActions';
import InboxIcon from 'material-ui-icons/Inbox';
import NoResults from '../components/NoResults';
import Creator from '../containers/Creator';

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

    constructor(props) {
        super(props);

        this.state = {
            creatorOpen: false,
        };

        this.handleAddCase = this.handleAddCase.bind(this);
        this.handleNewCaseCreation = this.handleNewCaseCreation.bind(this);
    }

    handleAddCase() {
        console.log("Adding a new case!");
        this.setState({creatorOpen: true})
    }

    fetchCases(){
        //TODO Not sure if it is any good
        if(this.props.currentProject){
            this.props.getCases(this.props.currentProject);
        }
    }

    componentDidMount() {
        this.fetchCases()
    }

    componentDidUpdate(prevProps){
        console.log(prevProps);
        if(prevProps.currentProject != this.props.currentProject){
            this.fetchCases();
        }
    }

    handleNewCaseCreation(data){
        const projectId = this.props.currentProject;
        this.props.createCase(projectId, data)
            .then((data) => {
                console.log(`Case created: ${data}`);
                this.fetchCases();
                this.setState({creatorOpen: false})
            })
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
        return elements;
    }

    render() {
        const {classes, theme} = this.props;
        console.log("RERENDERING");
        return (

            <div>
                <Creator
                    open={this.state.creatorOpen}
                    title={'New Case'}
                    handleClose={() => {this.setState({creatorOpen: false})}}
                    handleSubmit={(data) => {this.handleNewCaseCreation(data)}}
                />

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
            </div>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        getCases: getCases,
        createCase: createCase
    }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        cases: state.cases.get('casesById'),
        currentProject: state.projects.get('currentProject')
    }
};


export default compose(
    withStyles(styles, {withTheme: true}),
    connect(mapStateToProps, matchDispatchToProps)
)(Cases);