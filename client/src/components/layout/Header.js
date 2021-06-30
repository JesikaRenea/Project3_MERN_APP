import React from 'react';
import Learning from "../../assets/images/learning.png"


const Header = () => {
    return (
            <div className="jumbotron header" >
                <img className="logo-image" style={{textAlign: "center"}} src={Learning} alt="Logo" />
                <hr />
            </div>

    );
};

export default Header