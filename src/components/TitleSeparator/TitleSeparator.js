import React, { Component } from "react";
import "./styles.css";
export default class TitleSeparator extends Component {
  render() {
    return (
      <div className="titleSeparator__container">
        <div className="titleSeparator__text">{this.props.title}</div>
        <div className="titleSeparator__bar"></div>
      </div>
    );
  }
}
