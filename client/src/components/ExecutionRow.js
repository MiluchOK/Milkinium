import React, { Component } from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

class ExecutionRow extends Component {

  render() {
    return (
        <ListItem button>
          <ListItemIcon>
              {this.props.icon}
          </ListItemIcon>
          <ListItemText primary={this.props.title} />
        </ListItem>
    );
  }
}

export default ExecutionRow;
