import React, { Component } from "react";
import VideoSearchForm from "./VideoSearchForm";
import VideoSearchResults from "./VideoSearchResults"
import API from "../../utils/API";

class VideoSearchContainer extends Component {
  state = {
    search: "",
    results: []
  };


  searchVideos = query => {
    API.extVideoSearch({ query })
      .then(res => {

        this.setState({ results: res.data })
      }
      )

      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchVideos(this.state.search);
  };

  render() {
    return (
      <div>
        <VideoSearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <VideoSearchResults results={this.state.results} />
      </div>
    );
  }
}

export default VideoSearchContainer;
