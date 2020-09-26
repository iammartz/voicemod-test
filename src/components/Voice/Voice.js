import React, { Component } from 'react';
import './styles.css'
import { setVoiceAction } from '../../actions/setVoiceAction';
import { connect } from 'react-redux';
import { toggleFavouriteVoice } from '../../actions/toggleFavouriteVoice';

class Voice extends React.Component {
    constructor(props){
        super(props)
        this.handleActivateVoice = this.handleActivateVoice.bind(this);
        this.handleAddFavourite = this.handleAddFavourite.bind(this);
    }

    handleActivateVoice(){
        this.props.setVoiceAction(this.props.id);
    }

    handleAddFavourite(){
        this.props.toggleFavouriteVoice(this.props);
    }

    render() {
        return(
            <div className="voice">
                <div className={`voice__circle ${this.props.voiceReducer.activeVoice === this.props.id ? 'selected' : ''}`}>
                    <div onClick={this.handleAddFavourite} className="voice__circle__favourite"></div>
                    <div onClick={this.handleActivateVoice}>
                        <div className="voice__circle__background"></div>
                        <img className="voice__circle__icon" src={`/assets/${this.props.icon}`}></img>
                    </div>
                </div>
                <div className="voice__title">{this.props.title}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
   })
  
const mapDispatchToProps = (dispatch) => ({
     setVoiceAction: (e) => {
       dispatch(setVoiceAction(e))
      },
      toggleFavouriteVoice: (e) => {
          dispatch(toggleFavouriteVoice(e))
      }
   })


export default connect(mapStateToProps, mapDispatchToProps)(Voice)