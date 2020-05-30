import React from "react";

function DefCard() {
    return (

        <div className="row">
            <div className="col s12">
                <div className="card blue-grey">
                    <div className="card-content white-text">
                        <span className="card-title" id="term-title">Term</span>
                        <p id="term-def">Definition
                        </p>
                        <hr />
                        <span id="category-id">Category</span>
                    </div>
                    <div className="card-action">
                        <a href="#">Ref Links</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefCard