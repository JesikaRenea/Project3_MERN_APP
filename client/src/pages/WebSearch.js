import React from 'react';
import Navbar from "../components/Navbar";
import SkillsTable from "../components/SkillsTable";



const WebSearch = props => {
    return (
        <div>
        <Navbar />
            <div class="row mainRow1">
                <div class="col s2">
                    <SkillsTable />
                </div>
                <div class="col s10">

                </div>
            </div>
        </div>
    );
};

export default WebSearch