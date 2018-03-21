import React, {Component} from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';

class DrawerItem extends Component {

    render() {
        return (
            <ListItem button>
                <ListItemIcon>
                    <InboxIcon />
                    {/*{this.props.icon}*/}
                </ListItemIcon>
                <ListItemText primary={this.props.text} />
            </ListItem>
        );
    }
}

export default DrawerItem;
