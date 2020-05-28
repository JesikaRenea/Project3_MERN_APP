import React from 'react';
import Navbar from "../components/layout/Navbar";
import SkillsTable from "../components/layout/SkillsTable";
import LibCard from '../components/cards/LibCard'


const Library = props => {
    return (
        <div>
            <Navbar />
            <div class="row mainRow1">
                <div class="col s2">
                    <SkillsTable />
                </div>
                <div class="col s10">
                    <h4 className="page-title">My Library</h4>
                    <LibCard />
                </div>
            </div>
        </div>
    );
};

export default Library