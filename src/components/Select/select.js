import React, { Component } from "react";
import "./styles.css";
export default class Select extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.props.searchBarInput(e.target.value);
  }

  render() {
    return (
      <div className="select">
        <img className="select__icon" src={this.props.icon}></img>
        <div className="select__box">
          {this.props.options && (
            <select value="potato" className="select__box__input">
              {this.props.options.map((option) => (
                <option value={option}>{option}</option>
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
