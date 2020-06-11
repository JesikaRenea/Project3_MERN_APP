import React, {useState} from "react";
import API from "../../utils/API";


const DefCard = props => {
    const [defText, setDefText] = useState(props.defText);

    const deleteDef = id => {
        API.delDefById(id)
          .then(res => {console.log(res)
          props.setGetDefs(true)})
        
          .catch(err => console.log(err));
      }

      const handleDefChange = e => {
          console.log(e.target.value)
          setDefText(e.target.value)
      }

      const handleUpdate = (id, defText) => {
          console.log("In handle Update")
          console.log(id, defText);
          
          API.updateDef({defId:id, defText:defText})
          .then(res=> {
              console.log(res);
              props.setGetDefs(true);
          })
      }

    return (

        <div className="row" key={props.id}>
            <div className="col s12">
                <div className="card blue-grey">
                    <div className="card-content white-text">
                        <span className="card-title" id="term-title"><strong>Term: {props.defName}</strong></span>
                        <form >
                        Definition:
                        <textarea id="term-def" value= { defText } onChange = {handleDefChange}/>
                        </form>
                        <span id="category-id">Category: {props.defCat}</span>
                        <button
                            onClick={() => deleteDef(props.id)}
                            className="btn waves-effect waves-light"
                                    id="lib-btn"
                                    type="delete" name="action">
                                    Delete
                        <i className="material-icons right">delete</i>
                                </button>

                                <button
                                    onClick = { ()=>handleUpdate(props.id, defText)}
                                    className="btn waves-effect waves-light"
                                    id="lib-btn"
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