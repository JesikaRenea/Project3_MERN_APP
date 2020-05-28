import React from 'react';

const DefinitionInput = props => {
    return (

        <div className="inputContainer">

            <div className="row">
            <h5 className="col s4">Add a Definition</h5>

                <div class="input-field col s6">
                    <select>
                        <option value="" disabled selected>Choose your option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                    <label>Category Select</label>
                </div>
                <div className="col s2">
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
                    </button>
                </div>
            </div>

            <div class="row">
                <form class="col s12">
                    <div class="input-field col s4">
                        <input id="library-input" type="text" class="validate" />
                        <label for="library-title">Title</label>
                    </div>
                    <div class="input-field col s8">
                        <input id="library-link-input" type="text" class="validate" />
                        <label for="library-link">Link</label>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default DefinitionInput