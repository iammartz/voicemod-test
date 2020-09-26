import React, { Component } from 'react';
import './styles.css'
import Select from '../Select/select';
export default class Filter extends Component {
    render() {
        return(
           <Select icon="/assets/filter.svg" options={this.props.options}></Select>
        )
    }
}