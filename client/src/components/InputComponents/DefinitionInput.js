import React from 'react';

const DefinitionInput = props => {
    return (

        <div className="inputContainer">

            <div className="row">
            <h5 className="col s4">Add a Definition</h5>

                <div className="input-field col s6">
                    {/* <select>
                        <option value="" disabled selected>Choose your option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select> */}
                    <label>Category Select</label>
                </div>
                <div className="col s2">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
    <i className="material-icons right">send</i>
                    </button>
                </div>
            </div>
            <div className="row">
                <form className="col s12">
                    <div className="input-field col s4">
                        <input id="term-input" type="text" className="validate" />
                        <label htmlFor="term">Term</label>
                    </div>
                    <div className="input-field col s8">
                        <input id="definition-input" type="text" className="validate" />
                        <label htmlFor="definition">Definition</label>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default DefinitionInput