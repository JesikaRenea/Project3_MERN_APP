import React from 'react';
import Navbar from "../components/layout/Navbar";
import VideoSearchContainer from "../components/searchComponents/VideoSearchContainer"

const VideoSearch = props => {
    return (
        <div>
        <Navbar />
            <div className="row mainRow1">
                <div className="container">
                <VideoSearchContainer />
                </div>
            </div>
        </div>
    );
};

export default VideoSearch