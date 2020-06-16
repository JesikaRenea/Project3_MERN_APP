import React, {useState, useEffect} from "react";
import API from "../../utils/API";
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function VideoSearchResults(props) {
    const [getCategories, setGetCategories] = useState(true)
    const [categories, setCategories] = useState([])
    const [selectedValue, setSelectedValue] = useState("")
    
    const addVideoSuccess = () =>{
        toast('Video Added!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }

    const needCat = () =>{
        toast('Must have a category!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      }
    
    useEffect(() => {
        if (getCategories)

            API.findAllCat()
                .then(res => {
               setCategories(res.data.map(cat => ({
                    value: cat._id,
                    label: cat.catName
                })
                    ))
                }
                )
                .catch(
                    error => console.log(error.response.data)
                )

        setGetCategories(false)

    },
        [getCategories]
    );

    const handleCatChange = selectedValue => {
        setSelectedValue(selectedValue)
    }

    const handleAdd = (video) =>{
        if(selectedValue){
            API.addLib({
                libName: video.title,
                libURL: video.url,
                libType: "VIDEO",
                catId: selectedValue.value
            })
            .then(res =>{
                addVideoSuccess();
            })
            .catch(err =>{
                console.log(err);
            })
        } else {
            needCat();
        }
    }

    return (
        <ul className="list-group">
            {props.results.map((result, i) => (

                <div className="row" key={result.id.videoId}>
                    <div className="col s12">
                        <div className="card">
                            <div className="card-content">

                                <div className="card-title" id={"video-title" + i} >

                                    Title: {result.title}

                                </div>

                                <p id={"lib-des" + i}>
                                    Channel: {result.channelTitle}
                                    <br />
                                    Duration: {result.duration}
                                </p>
                            </div>
                            <div style = {{height:"100px"}} className="card-action">
                                <div className = "col s6">
                                <a href={result.url}
                                    target="_blank"
                                    rel="noopener noreferrer">{result.url}
                                </a>
                                </div>
                                    <div className = "col s3">
                                            <Select
                                                value={selectedValue}
                                                onChange={handleCatChange}
                                                options={categories}
                                                placeholder="Category Select"
                                            />
                                    </div>
                                <div className = "col s3">
                                <button
                                    onClick={()=>handleAdd(result)}
                                    className="btn waves-effect waves-light"
                                    id="result-btn"
                                    type="submit" name="action">
                                    Add To Library
                                    <i className="material-icons right">send</i>
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
                </div>

            ))}
        </ul>
    );
}

export default VideoSearchResults;
