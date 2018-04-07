import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, Field, reduxForm} from 'redux-form'
import {withStyles} from 'material-ui/styles';
import {InputLabel} from 'material-ui/Input';
import {MenuItem} from 'material-ui/Menu';
import {FormControl} from 'material-ui/Form';
import {Input} from 'material-ui';
import CheckBox from '../components/CheckBox';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

class ProjectSelector extends Component {

    render() {

        //TODO Get from redux
        const projects = this.props.allProjects;

        return (
            <form>
                <Field
                    name="projects"
                    id="projects"
                    component={CheckBox}
                    data={projects}
                    label="Projects"
                    type="string"
                    margin="none"
                />
            </form>
        );
    }
}

ProjectSelector = reduxForm({
    // a unique name for the form
    form: 'projectSelector'
})(ProjectSelector);

const mapStateToProps = (state) => {
    const pbid = state.projects.get('projectsById');
    return {
        allProjects: pbid
    }
};

ProjectSelector = withStyles(styles)(ProjectSelector);
export default connect(mapStateToProps)(ProjectSelector);