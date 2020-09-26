import React, { Component } from 'react';
import './styles.css'
export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e){
        this.props.searchBarInput(e.target.value)
    }

    render() {
        return(
            <div className="searchBar">
                <img className="searchBar__icon" src="/assets/search.svg"></img>
                <input type="text" defaultValue="" onInput={this.handleInput}></input>
            </div>
        )
    }
}