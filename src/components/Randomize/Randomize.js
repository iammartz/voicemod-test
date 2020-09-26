import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.css";
import { setVoiceAction } from "../../actions/setVoiceAction";

class Randomize extends Component {
  constructor(props) {
    super(props);
    this.randomize = this.randomize.bind(this);
    this.state = {
      randomizedVoice: null,
      displayMessage: false,
    };
  }

  randomize() {
    this.state.randomizedVoice = this.props.randomizedVoice();
    this.props.setVoiceAction(this.state.randomizedVoice.id);
    this.setState({ displayMessage: true });
    setTimeout(() => {
      this.setState({ displayMessage: false });
    }, 1000);
  }

  render() {
    return (
      <>
        <div className="randomize" onClick={this.randomize}>
          <img src="/assets/button-random.svg"></img>
        </div>
        <div
          className={`randomize__message ${
            this.state.displayMessage ? "active" : ""
          }`}
        >
          {this.state.randomizedVoice && (
            <>
              <img
                className="randomize__message__image"
                src={`/assets/${this.state.randomizedVoice.icon}`}
              ></img>
              {this.state.randomizedVoice.name}
            </>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setVoiceAction: (e) => {
    dispatch(setVoiceAction(e));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Randomize);
