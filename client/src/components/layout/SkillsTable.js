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
          <tr>
            <td id="skillsTable">JavaScript</td>
          </tr>
          <tr>
            <td>Python</td>
          </tr>
          <tr>
            <td>MongoDB</td>
          </tr>
        </tbody>
      </table>

    );
};

export default SkillsTable