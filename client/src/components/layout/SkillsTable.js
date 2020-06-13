import React, { useState } from 'react';
import API from "../../utils/API";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SkillsTable = props => {

  const [getMaster, setMaster] = useState([]);
  const [getCheck, setCheck] = useState([])

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

  const handleCheck = (id, master) =>{
    console.log("At Handle Check")
    console.log(master)
    if(master === true){
      API.unmasterSkill(id)
    .then(res => {
      console.log(res)
      setMaster({master:false})
      setCheck({checked:false})
    })
    .catch(err => console.log(err))
    } else {
      API.masterSkill(id)
      .then(res =>{
        console.log(res)
        setMaster({master:true})
        setCheck({checked:true})
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
                    //defaultChecked = {skill.master}                   
                    id = {i}
                    type="checkbox"
                    value= {skill.master ? 'checked' : 'unchecked'}
                    style = {{align:"right", opacity:1}}
                    onClick = {() => handleCheck(skill.id, skill.master)}
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