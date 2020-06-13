import React from 'react';
import API from "../../utils/API";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SkillsTable = props => {


  const deleteSkillSuccess = () =>{
    toast('Skill Deleted Successfully', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}
  
  const deleteSkill = id => {
    API.delSkillById(id)
      .then(res => {
        deleteSkillSuccess();
        props.setGetSkills(true)})
      .catch(err => console.log(err));
  }

  const handleCheck = (id,newMaster) =>{
    if(newMaster){
      API.masterSkill(id)
      .then(res => {
        props.setGetSkills(true)
    })
    .catch(err => console.log(err))
    } else {
      API.unmasterSkill(id)
      .then(res =>{
        props.setGetSkills(true)
      })
    }
  }


  return (
    
    <table>
      <thead>
        <tr>
          <th>Skills</th>
        </tr>
      </thead>
      
      <tbody>
        {props.skills.map((skill, i) => (
          <tr key={skill.id}>
            <td>
              {skill.name}
                <i
                  style={{color: "gray"}}
                  onClick={() => deleteSkill(skill.id)}
                  className="material-icons right"
                  id={skill.id}>delete
                </i>
                <div className ="row">
                <form>
                  <label>
                    <p>
                      Mastered&nbsp;  <input
                    checked = {skill.master}
                    id = {i}
                    type="checkbox"
                    value= {skill.master ? 'checked' : 'unchecked'}
                    style = {{align:"right", opacity:1}}
                    onChange = {() => handleCheck(skill.id, !skill.master)}
                  />

                    </p>
                  </label>
                </form>
                </div> {/* Row Div */}
                <ToastContainer
                  position="top-right"
                  autoClose={2000}
                  hideProgressBar={true}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
            </td>
          </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default SkillsTable