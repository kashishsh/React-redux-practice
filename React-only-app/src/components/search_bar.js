import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.onVideoSearch = this.onVideoSearch.bind(this);
  }

  onVideoSearch(event) {
    const value = event.target.value;

    this.setState({
      term: value
    });
    this.props.videoSearch(event.target.value);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          onChange={this.onVideoSearch}
          value={this.state.term}
        />
      </div>
    );
  }
};

export default SearchBar;
