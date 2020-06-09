import React from "react";
import API from "../../utils/API";

const LibCard = props => {

    const deleteLib = id => {
        // console.log(id)
        API.delLibById(id)
          .then(res => alert("Item Deleted"))
          .catch(err => console.log(err));
      }

    return (

        <div className="row" key={props.id}>
            <div className="col s12">
                <div className="card blue-grey">
                    <div className="card-content white-text">

                        <div className="card-title" id="lib-title">
                            {/* <i className="fa fa-book" aria-hidden="true"></i>
                            <i className="fa fa-video-camera " aria-hidden="true"></i> */}
                            Title: {props.libName}

                        </div>

                        <p id="lib-des">Type: {props.libType}
                        </p>
                        <hr />
                        <span id="category-id">Category: {props.libCat} </span>
                    </div>
                    <div className="card-action">
                        <a href={props.libURL}
                            target="_blank"
                            rel="noopener noreferrer">{props.libURL}</a>


                        <button
                            onClick={() => deleteLib(props.id)}
                            className="btn waves-effect waves-light"
                            id="card-btn"
                            type="delete" name="action">
                            Delete
                        <i className="material-icons right">delete</i>
                        </button>

                        <button
                            // onClick={handleUpdate}
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

export default LibCard