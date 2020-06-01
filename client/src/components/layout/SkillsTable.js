import React, { useEffect, useState } from 'react';
import API from "../../utils/API";


const SkillsTable = props => {
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
    <table>
      <thead>
        <tr>
          <th>Skills</th>
        </tr>
      </thead>

      <tbody>
        {skills.map(skill => (
          <tr key={skill.id}>
            <td>
              {skill.name}
            </td>
          </tr>
        ))}


      </tbody>
    </table>

  );
};

export default SkillsTable