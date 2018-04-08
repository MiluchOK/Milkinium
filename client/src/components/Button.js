/**
 * Created by alexeymilyukov on 4/8/18.
 */
import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import MIButton from 'material-ui/Button';

class Button extends Component {

    render() {

        return (
            <MIButton
                onClick={this.props.onClick}
                variant="raised"
                color={this.props.color}
                type={this.props.type}
            >
                {this.props.children}
            </MIButton>
        )
    }
}

export default Button;