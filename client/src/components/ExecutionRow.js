import React, { Component } from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import Grid from 'material-ui/Grid';

class ExecutionRow extends Component {

  render() {
    return (
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
    );
  }
}

export default ExecutionRow;