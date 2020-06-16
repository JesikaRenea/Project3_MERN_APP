import React from "react";
import API from "../../utils/API";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LibCard = props => {
    const deleteLibSuccess = () =>{
        toast('Library Item Deleted Successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }

    const deleteLib = id => {
        API.delLibById(id)
        .then(res => {console.log(res)
            deleteLibSuccess();
            props.setGetLib(true)
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="row" key={props.id}>
            <div className="col s12">
                <div className="card">
                    <div className="card-content">
                        <div className="card-title" id="lib-title">
                            {/* <i className="fa fa-book" aria-hidden="true"></i>
                            <i className="fa fa-video-camera " aria-hidden="true"></i> */}
                            Title: {props.libName}
                        </div>
                        <p id="lib-des">
                            Type: {props.libType}
                        </p>
                        <hr />
                        <span id="category-id">Category: {props.libCat} </span>
                    </div>
                    <div className="card-action"
                    id="card-link">
                        <a href={props.libURL}
                            target="_blank"
                            rel="noopener noreferrer">{props.libURL}</a>
                        <button
                            onClick={() => deleteLib(props.id)}
                            className="btn waves-effect waves-light"
                            id="lib-btn"
                            type="delete" name="action">
                                Delete
                            <i className="material-icons right">delete</i>
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

                        {/* <button
                            // onClick={handleUpdate}
                            className="btn waves-effect waves-light"
                            id="card-btn"
                            type="update" name="action">
                            Update
                        <i className="material-icons right">edit</i>
                        </button> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LibCard