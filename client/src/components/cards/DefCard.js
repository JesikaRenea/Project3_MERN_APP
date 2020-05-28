import React from "react";

function DefCard() {
    return (

        <div class="row">
            <div class="col s12">
                <div class="card blue-grey">
                    <div class="card-content white-text">
                        <span class="card-title" id="term-title">Term</span>
                        <p id="term-def">Definition
                        </p>
                        <hr />
                        <span id="category-id">Category</span>
                    </div>
                    <div class="card-action">
                        <a href="#">Ref Links</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefCard