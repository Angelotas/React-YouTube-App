import React, { Component } from "react";

class SearchBar extends Component {

    constructor(props) { 
        super(props);
        this.state = { term: '' };
    }

    render() { 
        return (
            <div className="search-bar">
                <input
                    onChange={(e) => this.setState({ term: e.target.value })} value={this.state.term} placeholder="Search for videos" />
                Value of the input: { this.state.term }
            </div>
        );
    }
}

export default SearchBar;