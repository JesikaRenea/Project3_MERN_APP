import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import Main from '../Main'
import Navbar from "../layout/Navbar";
// import UserInputs from "../UserInputs"


class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        // const { user } = this.props.auth;
        return (
            <div >
                <Navbar />
                <Main />
                {/* <UserInputs /> */}
                <button className="btn btn-large waves-effect waves-light hoverable" style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                }} onClick={this.onLogoutClick}>
                    Logout
                </button>
            </div>

        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(Dashboard);