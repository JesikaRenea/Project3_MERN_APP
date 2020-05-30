import React, { useEffect, useState } from 'react';
import API from "../../utils/API";


const SkillsTable = props => {

  // const [skills, setSkills] = useState([])

  // useEffect(() => {
  //   {
  //     API.getAllSkillsByUser()
  //     .then(res => {
  //       console.log(res.data);
  //       setSkills(res.data.map(cat => ({
  //         value: skills._id,
  //         label: skills.skillsName
  //       })
  //       ))
  //     }
  //     )
  //     .catch(
  //       error => console.log(error.response.data)
  //     )
  //   }
  // },
  //   []
  // );


  return (
    <table>
      <thead>
        <tr>
          <th>Skills</th>
        </tr>
      </thead>

      <tbody>
        {/* {skills.map(skills => ( */}
          <tr>
            <td>
              {/* {skills} */}
            </td>
          </tr>
        ))}


      </tbody>
    </table>

  );
};

export default SkillsTable