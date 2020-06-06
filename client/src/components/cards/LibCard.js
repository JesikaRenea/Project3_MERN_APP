import React from "react";

const LibCard = props => {
    return (

        <div className="row">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LibCard