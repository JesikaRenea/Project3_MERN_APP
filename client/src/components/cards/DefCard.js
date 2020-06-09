import React from "react";
import API from "../../utils/API";


const DefCard = props => {

    const deleteDef = id => {
        API.delDefById(id)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      }

    return (

        <div className="row" key={props.id}>
            <div className="col s12">
                <div className="card blue-grey">
                    <div className="card-content white-text">
                        <span className="card-title" id="term-title"><strong>Term: {props.defName}</strong></span>
                        <p id="term-def">Definition: {props.defText}
                        </p>
                        <hr />
                        <span id="category-id">Category: {props.cat}</span>
                    </div>

                    <div className="card-action">
                    <a href="#">Ref Links</a>

                                <button
                                    onClick={deleteDef}
                                    className="btn waves-effect waves-light"
                                    id="card-btn"
                                    type="delete" name="action">
                                    Delete
                        <i className="material-icons right">delete</i>
                                </button>

                                <button
                                    // onClick={handleDelete}
                                    className="btn waves-effect waves-light"
                                    id="card-btn"
                                    type="update" name="action">
                                    Update
                        <i className="material-icons right">edit</i>
                                </button>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefCard