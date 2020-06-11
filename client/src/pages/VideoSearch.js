import React from 'react';
import Navbar from "../components/layout/Navbar";
// import SkillsTable from "../components/layout/SkillsTable";
import VideoSearchContainer from "../components/searchComponents/VideoSearchContainer"

const VideoSearch = props => {
    return (
        <div>
        <Navbar />
            <div className="row mainRow1">

                {/* <div className="col s2">
                    Skills Table
                </div> */}

                <div className="container">
                <VideoSearchContainer />
                </div>
            </div>
        </div>
    );
};

export default VideoSearch