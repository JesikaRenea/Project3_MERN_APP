import React, { useState } from 'react';
import API from "../../utils/API";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SkillsTable = props => {

  const [getMaster, setMaster] = useState([props.skills.master]);
  
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

  const handleCheck = (id) =>{
    if(getMaster.master){
      API.unmasterSkill(id)
      .then(res => {
        console.log("Unmastered")
        setMaster({master:false})
        console.log(res)
    })
    .catch(err => console.log(err))
    } else {
      API.masterSkill(id)
      .then(res =>{
        console.log("Mastered")
        setMaster({master:true})
        console.log(res)
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
                      Mastered
                    </p>
                  <input
                    //defaultChecked = {skill.master ? 'checked' : 'unchecked'}
                    id = {i}
                    type="checkbox"
                    value= {getMaster.master ? 'checked' : 'unchecked'}
                    style = {{align:"right", opacity:1}}
                    onChange = {() => handleCheck(skill.id)}
                  />
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