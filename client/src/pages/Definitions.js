import React, { useState, useEffect }  from 'react';
import Navbar from "../components/layout/Navbar";
import SkillsTable from "../components/layout/SkillsTable";
import DefCard from "../components/cards/DefCard";
import Main from "../components/Main";
import API from "../utils/API"




const Definitions = props => {
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
<div>
    <Navbar />
        <div className="row mainRow1">
            <div className="col s2">
                <SkillsTable skills={skills}/>
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