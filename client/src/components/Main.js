import React, { useState, useEffect } from 'react';
import Navtabs from "./Navtabs"
import SkillsTable from "./layout/SkillsTable";
import UserInputs from "./UserInputs"
import API from "../utils/API"


const Main = props => {
    const [getSkills, setGetSkills] = useState(true)
    const [skills, setSkills] = useState([])
  
    useEffect(() => {
      {
        if (getSkills)
          API.getAllSkillsByUser()
            .then(res => {
              console.log(res.data);
              setSkills(res.data.map(skill => ({
                id: skill._id,
                name: skill.skillsName
              })
              ))
            }
            )
            .catch(
              error => console.log(error.response.data)
            )
            
        setGetSkills(false)}
    },
      [getSkills]
    );

    return (

        <div className="row mainRow1">
            <div className="col s2">
                <SkillsTable skills={skills}/>
            </div>
            <div className="col s10">
                {/* <Navtabs /> */}
                <UserInputs getSkills={setGetSkills}/>
            </div>
        </div>

    );
};

export default Main