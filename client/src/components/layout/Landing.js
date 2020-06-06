import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Landing extends Component {
    render() {
        return (
            <div className="container valign-wrapper" >
                <div className="row">
                    <div className="col s12 center-align">

                        <div className="col s6">
                            <Link to="/register" className="btn btn-large waves-effect waves-light hoverable" style={{
                                width: "140px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px"
                            }}>
                                Register
                            </Link>
                            {/* <Register /> */}
                        </div>
                        <div className="col s6">
                            <Link to="/login" className="btn btn-large btn-flat waves-effect white black-text" style={{
                                width: "140px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px"
                            }}>
                                Login
                            </Link>
                            {/* <Login /> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;