import React from "react";

const DefCard = props => {
    return (

        <div className="row">
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
                        {/* <a href="#">Ref Links</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefCard