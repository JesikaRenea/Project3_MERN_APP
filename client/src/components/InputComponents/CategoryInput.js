import React, { useState } from 'react';
import API from "../../utils/API";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CategoryInput = (props) => {
    const [category, setCategory] = useState("")

    const addCatSuccess = () =>{
        toast('Category Added Successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        API.addCat({
            catName: category
        })
            .then(res => {
                addCatSuccess();
                setCategory("");
                props.getCats(true);
            }
            )
            .catch(
                error => console.log(error)
            )
    }

    return (
        <div className="inputContainer">
            <div className="row">
                <h5 className="col s4">Add a Category</h5>

                <div className="input-field col s6">
                    <input
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        id="category-input"
                        type="text"
                        className="validate" />
                    <label htmlFor="skill">Category Title</label>
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
        </div>
    );
};

export default CategoryInput