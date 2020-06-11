import React from 'react';
import Navbar from "../components/layout/Navbar";
// import SkillsTable from "../components/layout/SkillsTable";
import SearchContainer from "../components/searchComponents/SearchContainer"

const WebSearch = props => {
    return (
        <div>
            <Navbar />
            <div className="row mainRow1">
                {/* <div className="col s2">
                    Skills Table
                </div> */}
                <div className="container">
                    <SearchContainer />
                </div>
            </div>
        </div>
    );
};

export default WebSearch