import React, { useState } from 'react';
import API from "../../utils/API";
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SkillInput = (props) => {
    const [selectedValue, setSelectedValue] = useState("")
    const [skill, setSkill] = useState("")

    const addSkillSuccess = () =>{
        toast('Skill Added Successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }

    const handleCatChange = selectedValue => {
        setSelectedValue(selectedValue)
    }

    const handleSubmit = e => {
        e.preventDefault();
        API.addSkill({
            skillsName: skill,
            catId: selectedValue.value
        })
            .then(res => {
                addSkillSuccess();
                setSkill("")
                props.getSkills(true)
            })
            .catch(
                error => console.log(error)
            )}
    return (

        <div style={{height:"200px"}} className="inputContainer">

            <div className="row">
                <h5 className="col s4">Add a Skill</h5>

                <div className="input-field col s6">
                    <Select
                        value={selectedValue}
                        onChange={handleCatChange}
                        options={props.categories}
                        placeholder="Category Select"
                    />
                </div>

                <div className="col s2">
                    <button
                        onClick={handleSubmit}
                        className="btn waves-effect waves-light"
                        type="submit" name="action">
                        Submit
                        <i className="material-icons right">send</i>
                    </button>
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
                </div>
            </div>

            <div className="row">
                <form className="col s12">
                    <div className="input-field col s12">
                        <input
                            value={skill}
                            onChange={(e) => setSkill(e.target.value)}
                            id="skill-input"
                            type="text"
                            className="validate" />
                        <label htmlFor="skill">Skill</label>
                    </div>
                    {/* <div className="input-field col s8">
                        <input
                            id="skill-description-input"
                            type="text"
                            className="validate" />
                        <label htmlFor="description">Description</label>
                    </div> */}
                </form>
            </div>
        </div>

    );
};

export default SkillInput