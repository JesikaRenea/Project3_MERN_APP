import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import Select from 'react-select';


const SkillInput = (props) => {
    const [selectedValue, setSelectedValue] = useState("")
    const [skill, setSkill] = useState("")

    const handleCatChange = selectedValue => {
        setSelectedValue(selectedValue)
        console.log(selectedValue)
    }

    const handleSubmit = e => {
        e.preventDefault();
        API.addSkill({
            skillsName: skill,
            catId: selectedValue.value
        })
            .then(res => {
                console.log("Skill Saved");
                setSkill("")
            }
            )
            .catch(
                error => console.log(error.response.data)
            )
    }
    return (

        <div className="inputContainer">

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
                </div>
            </div>

            <div className="row">
                <form className="col s12">
                    <div className="input-field col s4">
                        <input
                            value={skill}
                            onChange={(e) => setSkill(e.target.value)}
                            id="skill-input"
                            type="text"
                            className="validate" />
                        <label htmlFor="skill">Skill</label>
                    </div>
                    <div className="input-field col s8">
                        <input
                            id="skill-description-input"
                            type="text"
                            className="validate" />
                        <label htmlFor="description">Description</label>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default SkillInput