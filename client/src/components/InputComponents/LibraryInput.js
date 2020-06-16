import React, { useState } from 'react';
import API from "../../utils/API";
import Select from 'react-select';
import Toggle from 'react-radio-toggle'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LibraryInput = (props) => {
    const [selectedValue, setSelectedValue] = useState("")


    const [libName, setLibName] = useState("");
    const [libURL, setLibURL] = useState("");
    const [libType, setLibType] = useState("TEXT")

    const addLibSuccess = () => {
        toast('Library Item Added Successfully', {
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
        API.addLib({

            libName: libName,
            libURL: libURL,
            libType: libType,
            catId: selectedValue.value

        })
            .then(res => {
                addLibSuccess();
                setLibName("");
                setLibURL("");
                setLibType("")
            }
            )
            .catch(
                error => console.log(error.response.data)
            )
    }


    return (

        <div className="inputContainer">

            <div className="row">
                <h5 className="col s4">Add to Library</h5>

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
                        type="submit" name="action">Submit
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
                            value={libName}
                            onChange={(e) => setLibName(e.target.value)}
                            id="library-input"
                            type="text"
                            className="validate" />
                        <label htmlFor="library-title">Title</label>
                    </div>
                    <div className="input-field col s6">
                        <input
                            value={libURL}
                            onChange={(e) => setLibURL(e.target.value)}
                            id="library-URL-input"
                            type="text"
                            className="validate" />
                        <label htmlFor="library-URL">Link</label>
                    </div>

                    <div className="input-field col s2">
                        <Toggle
                            id="toggle"
                            items={["TEXT", "VIDEO"]}
                            checked="TEXT"
                            name="toggleType"
                            onToggle={(e) => setLibType(e)}
                        />
                    </div>


                </form>
            </div>
        </div>


    );
};

export default LibraryInput