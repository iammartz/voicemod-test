import React, { Component } from 'react';
import './styles.css'
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
           <Select icon="/assets/filter.svg" options={this.props.options} handleOnClick={this.handleOnClick}></Select>
        )
    }
}