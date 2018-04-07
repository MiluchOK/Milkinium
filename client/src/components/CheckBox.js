import React, {Component} from 'react';
import _ from 'lodash';
import { Form, Field, reduxForm } from 'redux-form'
import { withStyles } from 'material-ui/styles';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import { Input } from 'material-ui';
import Select from 'material-ui/Select';


class CheckBox extends Component {


    render() {

        const { input, label, meta: { touched, error }, children, ...custom } = this.props;

        return (
            <Select
                style={{backgroundColor: 'white', paddingLeft: 10}}
                {...input}
                {...custom}
            >

                {_.map(custom.data, (p) => (
                    <MenuItem key={p._id} value={p.name}>{p.name}</MenuItem>
                ))}
            </Select>
        );
    }
}

export default CheckBox;
