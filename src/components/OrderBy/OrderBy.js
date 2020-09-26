import React, { Component } from 'react';
import './styles.css'
import Select from '../Select/select';
export default class OrderBy extends Component {
    render() {
        return(
          <Select icon="/assets/order.svg" options={this.props.options}></Select>
        )
    }
}