import React, {useState} from "react";
import API from "../../utils/API";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DefCard = props => {
    const [defText, setDefText] = useState(props.defText);

    const updateDefSuccess = () =>{
        toast('Definition Updated Successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }

    const deleteDefSuccess = () =>{
        toast('Definition Deleted Successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }

    const deleteDef = id => {
        API.delDefById(id)
            .then(res => {
                deleteDefSuccess();
                props.setGetDefs(true)
            })
            .catch(err => console.log(err));
    };

      const handleDefChange = e => {
          console.log(e.target.value)
          setDefText(e.target.value)
      }

      const handleUpdate = (id, defText) => {
          API.updateDef({defId:id, defText:defText})
          .then(res=> {
            updateDefSuccess()
            props.setGetDefs(true);
          })
      }

    return (

        <div className="row" key={props.id}>
            <div className="col s12">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title" id="term-title">Term: {props.defName}</span>
                        <form >
                        Definition: 
                        <br />
                        <textarea id="term-def" value= { defText } onChange = {handleDefChange}/>
                        </form>
                        <span id="category-id">Category: {props.defCat}</span>
                        <button
                            onClick={() => deleteDef(props.id)}
                            className="btn waves-effect waves-light"
                            id="def-btn"
                            type="delete" name="action">
                                Delete
                            <i className="material-icons right">delete</i>
                        </button>

                        <button
                            onClick = { ()=>handleUpdate(props.id, defText)}
                            className="btn waves-effect waves-light"
                            id="def-btn"
                            type="update" name="action">
                                Update
                            <i className="material-icons right">edit</i>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefCard