import React from 'react';

const CategoryInput = props => {
    return (

        <div className="inputContainer">

            <div className="row">
                <h5 className="col s4">Add a Category</h5>

                <div class="input-field col s6">
                <input id="category-input" type="text" class="validate" />
                        <label for="skill">Category Title</label>

                </div>

                <div className="col s2">
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default CategoryInput