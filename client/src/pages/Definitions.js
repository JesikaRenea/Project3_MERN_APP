import React from 'react';
import Navbar from "../components/layout/Navbar";
import SkillsTable from "../components/layout/SkillsTable";
import DefCard from "../components/cards/DefCard";



const Definitions = props => {
    return (
        <div>
        <Navbar />
            <div className="row mainRow1">
                <div className="col s2">
                    <SkillsTable />
                </div>
                <div className="col s10">
                    <h4 className="page-title">My Definitions</h4>
                    <DefCard />


                </div>
            </div>
        </div>
    );
};

export default Definitions