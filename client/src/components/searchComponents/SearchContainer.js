import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultsList from "./ResultsList"
import API from "../../utils/API";
// import Ext from "../../../../routes/api/ext"

class SearchContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // // When this component mounts, search the Giphy API for pictures of kittens
  // componentDidMount() {
  //   this.searchWeb({query: "web-dev"});
  // }

  searchWeb = query => {
    console.log({ query });
    API.extWebSearch({ query })
      .then(res => {
        console.log(res)
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

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchWeb(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultsList results={this.state.results} />
      </div>
    );
  }
}

export default SearchContainer;
