import React, {useState, useEffect} from "react";
import API from "../../utils/API";
import Select from 'react-select';

function VideoSearchResults(props) {
    const [getCategories, setGetCategories] = useState(true)
    const [categories, setCategories] = useState([])
    const [selectedValue, setSelectedValue] = useState("")

    useEffect(() => {
        if (getCategories)

            API.findAllCat()
                .then(res => {
                    console.log(res.data);
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
        console.log(selectedValue)
    }

    const handleAdd = (video) =>{
        if(selectedValue){
            console.log(video);
            console.log(selectedValue);
            API.addLib({
                libName: video.title,
                libURL: video.url,
                libType: "VIDEO",
                catId: selectedValue.value
            })
            .then(res =>{
                console.log(res);
                /*Need a user confirmation message*/
            })
            .catch(err =>{
                console.log(err);
            })
        } else {
            console.log("Must have a Category")
        }
    }

    return (
        <ul className="list-group">
            {props.results.map((result, i) => (

                <div className="row" key={result.id.videoId}>
                    <div className="col s12">
                        <div className="card blue-grey">
                            <div className="card-content white-text">

                                <div className="card-title"
                                    id={"video-title" + i} >

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
                                    id="card-btn"
                                    type="submit" name="action">
                                    Add To Library
                        <i className="material-icons right">send</i>
                                </button>
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
