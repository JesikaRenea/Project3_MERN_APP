import React, { useState } from 'react';
import API from "../../utils/API"
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DefinitionInput = (props) => {
    const [selectedValue, setSelectedValue] = useState("")

    const [defName, setDefName] = useState("");
    const [defText, setDefText] = useState("")

    const addDefSuccess = () =>{
        toast('Definition Added Successfully', {
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
        API.addDef({
            defName: defName,
            defText: defText,
            catId: selectedValue.value

        })
            .then(res => {
                addDefSuccess();
                setDefName("");
                setDefText("")
            })
            .catch(
                error => console.log(error.response.data)
            )}

return (
    <div className="inputContainer">

        <div className="row">
            <h5 className="col s4">Add a Definition</h5>

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
                    type="submit"
                    name="action">Submit
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
                <div className="input-field col s4">
                    <input
                        value={defName}
                        onChange={(e) => setDefName(e.target.value)}
                        id="term-input"
                        type="text"
                        className="validate" />
                    <label htmlFor="term">Term</label>
                </div>
                <div className="input-field col s8">
                    <input
                        value={defText}
                        onChange={(e) => setDefText(e.target.value)}
                        id="definition-input"
                        type="text"
                        className="validate" />
                    <label htmlFor="definition">Definition</label>
                </div>
            </form>
        </div>
    </div>

    );
};

export default DefinitionInput