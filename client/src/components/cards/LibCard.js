import React from "react";

function LibCard() {
    return (

        <div class="row">
            <div class="col s12">
                <div class="card blue-grey">
                    <div class="card-content white-text">

                        <row class="card-title" id="lib-title">
                            <i class="fa fa-book" aria-hidden="true"></i>
                            <i class="fa fa-video-camera " aria-hidden="true"></i>
                            Title
 
                        </row>

                        <p id="lib-des">Description
                        </p>
                        <hr />
                        <span id="category-id">Category</span>
                    </div>
                    <div class="card-action">
                        <a href="#">Link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LibCard