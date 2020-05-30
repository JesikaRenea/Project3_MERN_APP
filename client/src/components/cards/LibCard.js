import React from "react";

function LibCard() {
    return (

        <div className="row">
            <div className="col s12">
                <div className="card blue-grey">
                    <div className="card-content white-text">

                        <row className="card-title" id="lib-title">
                            <i className="fa fa-book" aria-hidden="true"></i>
                            <i className="fa fa-video-camera " aria-hidden="true"></i>
                            Title
 
                        </row>

                        <p id="lib-des">Description
                        </p>
                        <hr />
                        <span id="category-id">Category</span>
                    </div>
                    <div className="card-action">
                        <a href="#">Link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LibCard