import React, { Component } from 'react';
import Select from '../Select/select';
export default class OrderBy extends Component {

  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(data){
    this.props.filter(data)
  }

    render() {
        return(
          <Select icon="/assets/order.svg" options={this.props.options} handleOnClick={this.handleOnClick} default="descendent"></Select>
        )
    }
}