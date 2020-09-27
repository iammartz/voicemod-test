import React, { Component } from "react";
import TitleSeparator from "../TitleSeparator/TitleSeparator";
import "./styles.css";
export default class Select extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      selectedState: null
    }
  }

  handleInput(e) {
    this.props.searchBarInput(e.target.value);
  }

  handleSelect(e){
    this.props.handleOnClick(e.target.value);
  }

  render() {
    return (
      <div className="select">
        <img className="select__icon" src={this.props.icon}></img>
        <div className="select__box">
          {this.props.options && (
            <select onChange={this.handleSelect} value={this.state.selectedState} className="select__box__input">
              <option value="default">{this.props.default}</option>
              {this.props.options.map((option) => (
                (option.toLowerCase() !== this.props.default &&
                <option value={option}>{option}</option>)
              ))}
            </select>
          )}
          <img
            className="select__box__arrow"
            src="/assets/select-arrow.svg"
          ></img>
        </div>
      </div>
    );
  }
}
