import React from 'react';
import API from "../../utils/API";

const SkillsTable = props => {
  
  const deleteSkill = id => {
    API.delSkillById(id)
      .then(res => {console.log(res)
      props.setGetSkills(true)})
      .catch(err => console.log(err));
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Skills</th>
        </tr>
      </thead>

      <tbody>
        {props.skills.map(skill => (
          <tr key={skill.id}>
            <td>
              {skill.name}
              
              <i
                  onClick={() => deleteSkill(skill.id)}
                  className="tiny material-icons right"
                  id="lib-btn">X</i>

            </td>
          </tr>
        ))}


      </tbody>
    </table>

  );
};

export default SkillsTable