import React, {Component} from 'react';
import _ from 'lodash';
import { withStyles } from 'material-ui/styles';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

const styles = theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

class ProjectSelector extends Component {

    constructor(props){
        super(props);
    }

    state = {
        open: false,
    };

    handleChange = event => {
        this.props.handleChange(event.target.value);
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOpen = () => {
        this.setState({ open: true });
    };


    render() {
        const { classes } = this.props;
        console.log("THE CURRENT VALUE: " + this.props.currentOption);
        return (
            <form autoComplete="off">
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="controlled-open-select">Project</InputLabel>
                    <Select
                        open={this.state.open}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        value={this.props.currentOption}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'age',
                            id: 'controlled-open-select',
                        }}
                    >

                        {_.map(this.props.options, (p) => (
                            <MenuItem value={p._id}>
                                {p._id}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </form>
        );
    }
}

export default withStyles(styles)(ProjectSelector);
