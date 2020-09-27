import React, { Component } from 'react';
import Select from '../Select/select';
export default class Filter extends Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
      }
    
      handleOnClick(data){
        this.props.filter(data);
      }

    render() {
        return(
           <Select icon="/assets/filter.svg" options={this.props.options} default="all" handleOnClick={this.handleOnClick}></Select>
        )
    }
}