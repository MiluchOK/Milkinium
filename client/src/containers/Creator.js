import React, {Component} from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from '../components/Button';
import Grid from 'material-ui/Grid';
import Dialog from 'material-ui/Dialog';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Slide from 'material-ui/transitions/Slide';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class Creator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    render() {

        const { classes } = this.props;
        return (
            <div>
                <Dialog
                    fullScreen
                    open={this.props.open}
                    onClose={this.props.handleClose}
                    transition={Transition}
                >
                    <div>Starting from scratch this time.</div>
                    <Button onClick={this.props.handleSubmit} type="primary">Save</Button>
                    <Button onClick={this.props.handleClose}>Close the shit</Button>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(Creator);