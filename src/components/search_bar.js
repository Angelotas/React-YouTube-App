import React, { Component } from "react";

class SearchBar extends Component {

    constructor(props) { 
        super(props);
        this.state = { term: props.searchTerm, searchTerm: props.onSearchTermChange };
    }

    render() { 
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                    placeholder="Search for videos" />
            </div>
        );
    }

    onInputChange(eventData) {
        this.setState({ term: eventData });
        this.state.searchTerm(eventData);
    }
}

export default SearchBar;