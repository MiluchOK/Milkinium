import React, { Component } from 'react';
import { connect } from 'react-redux';


class Profile extends Component {

    render() {

        console.log(this.props.current_user);

        return (
            <div>
                <div>
                    Email: {this.props.current_user.get("email") || "John Doe"}
                </div>
                <div>
                    Name: {this.props.current_user.get("name") || "John Doe"}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { current_user: state.current_user };
};

export default connect(mapStateToProps)(Profile);
