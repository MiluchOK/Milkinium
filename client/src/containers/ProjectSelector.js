import React, {Component} from 'react';
import _ from 'lodash';
import { Form, Field, reduxForm } from 'redux-form'
import { withStyles } from 'material-ui/styles';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import { Input } from 'material-ui';
import Select from 'material-ui/Select';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});


const renderProjectsCheckbox = (props) => {
    console.log("THe props: " + Object.keys(props.input));
    return (<div>FOOOOO</div>)
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
