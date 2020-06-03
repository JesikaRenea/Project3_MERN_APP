import React from 'react';
import Learning from "../../assets/images/learning.png"


const Header = props => {
    return (
            <div className="jumbotron header" >
                <img className="logo-image" style={{textAlign: "center"}} src={Learning} alt="Logo" />
                <hr />
                {/* <div className="row welcomeRow"> */}
                    {/* <div className="col s6" >Welcome User</div>
                    <div className="col s6">Date</div> */}
                </div>

    );
};

export default Header