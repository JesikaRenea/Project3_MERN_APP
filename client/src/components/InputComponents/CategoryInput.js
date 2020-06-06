import React, { useState } from 'react';
import API from "../../utils/API"

const CategoryInput = (props) => {
    const [category, setCategory] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        API.addCat({
            catName: category
        })
            .then(res => {
                console.log("Category Saved");
                setCategory("");
                props.getCats(true)
                window.location.reload(false);

            }
            )
            .catch(
                error => console.log(error.response.data)
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
                </div>
            </div>
        </div>
    );
};

export default CategoryInput