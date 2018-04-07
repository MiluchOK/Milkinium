import React, {Component} from 'react';
import _ from 'lodash';
import { Form, Field, reduxForm } from 'redux-form'
import { withStyles } from 'material-ui/styles';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import { Input } from 'material-ui';
import Select from 'material-ui/Select';
import CheckBox from '../components/CheckBox';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});


const renderProjectsCheckbox = ({ input, label, meta: { touched, error }, children, ...custom }) => {
    // console.log("THe input is: " + props.foo);
    const projects = {
        'dsf3234': {title: 'foop1'},
        'dsfsd2345': {title: 'goop2'}
    };

    return (
        <Select
            {...input}
            {...custom}
        >

            {_.map(projects, (p) => (
                <MenuItem key={p.title} value={p.title}>{p.title}</MenuItem>
            ))}
        </Select>
    )
};


class ProjectSelector extends Component {

    handleSubmit(){
        console.log("Submitting.")
    }

    render() {
        return (
            <form>
                <Field
                    name="projects"
                    id="projects"
                    component={renderProjectsCheckbox}
                    projects={[]}
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

export default withStyles(styles)(ProjectSelector);
