import React from 'react';


const SkillsTable = props => {

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
            </td>
          </tr>
        ))}


      </tbody>
    </table>

  );
};

export default SkillsTable