import React, { Component } from "react";
import "./styles.css";
export default class Select extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSelectDisplay = this.handleSelectDisplay.bind(this);
    this.handleDefault = this.handleDefault.bind(this);
    this.state = {
      selectedState: this.props.default,
      activeDropdown: false
    };
  }

  handleSelect(e) {
    this.setState({selectedState: e.target.getAttribute("value")})
    this.props.handleOnClick(e.target.getAttribute("value"));
  }

  handleDefault(e){
    this.props.handleOnClick("default")
    this.setState({selectedState: e.target.getAttribute("value")})
  }

  handleSelectDisplay() {
    this.setState({ activeDropdown: !this.state.activeDropdown });
  }

  render() {
    return (
      <div className="select" onClick={this.handleSelectDisplay}>
        <img className="select__icon" alt="" src={this.props.icon}></img>
        <div className={`select__box ${
                  this.state.activeDropdown ? "active" : ""
                }`}>
          <div className="select__box__selectedItem">
            {this.state.selectedState}
          </div>
          {this.props.options && (
            <div
              value={this.state.selectedState}
              className="select__box__input"
            >
              <div
                className={`select__dropdown ${
                  this.state.activeDropdown ? "active" : ""
                }`}
              >
                <div onClick={this.handleDefault} className="select__dropdown__option" value={this.props.default}>{this.props.default}</div>
                {this.props.options.map(
                  (option) =>
                    option.toLowerCase() !== this.props.default && (
                      <div key={option} onClick={this.handleSelect} className="select__dropdown__option" value={option}>{option}</div>
                    )
                )}
              </div>
            </div>
          )}
          <img
            alt=""
            className="select__box__arrow"
            src="/assets/select-arrow.svg"
          ></img>
        </div>
      </div>
    );
  }
}
