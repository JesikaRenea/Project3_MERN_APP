import React from 'react';
import Navtabs from "./Navtabs"
import SkillsTable from "./layout/SkillsTable";
import UserInputs from "./UserInputs"


const Main = props => {
    return (

        <div className="row mainRow1">
            <div className="col s2">
                <SkillsTable />
            </div>
            <div className="col s10">
                {/* <Navtabs /> */}
                <UserInputs />
            </div>
        </div>

    );
};

export default Main