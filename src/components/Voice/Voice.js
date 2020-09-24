import React, { Component } from 'react';
import './styles.css'
export default class Voice extends React.Component {

    state = {
        status: false
    }

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({status: !this.state.status})
    }

    render() {
        return(
            <div className="voice" onClick={this.handleClick}>
                <div className={`voice__circle ${this.state.status ? 'selected' : ''}`}>
                    <div className="voice__circle__background"></div>
                    <div className="voice__circle__favourite"></div>
                    <img className="voice__circle__icon" src={`/assets/${this.props.icon}`}></img>
                </div>
                <div className="voice__title">{this.props.title}</div>
            </div>
        )
    }
}