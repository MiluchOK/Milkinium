import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import MatUIAppBar from 'material-ui/AppBar';
import classNames from 'classnames';
import Toolbar from 'material-ui/Toolbar';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        flexGrow: 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
        display: 'none',
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    avatar: {
        width: 40,
        height: 40,
        justifyContent: 'flex-end',
        marginRight: 20
    },
    projectName: {
        flex: 1
    }
});

class AppBar extends Component {

    render() {

        const { classes } = this.props;

        return (
            <MatUIAppBar
                position="absolute"
                className={classNames(classes.appBar, this.props.open && classes.appBarShift)}
            >
                <Toolbar disableGutters={!this.props.open}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.props.handleDrawerOpen}
                        className={classNames(classes.menuButton, this.props.open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" noWrap className={classes.projectName}>
                        Milkinium
                    </Typography>
                    <Avatar
                        alt="Adelle Charles"
                        src="https://cdn.business2community.com/wp-content/uploads/2012/11/twitter-small-business-marketing.jpe"
                        className={classNames(classes.avatar)}
                    />
                </Toolbar>
            </MatUIAppBar>
        );
    }
}

AppBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(AppBar);
