import React from "react";
import "./App.css";
import Voice from "./components/Voice/Voice";
import TitleSeparator from "./components/TitleSeparator/TitleSeparator";
import SearchBar from "./components/SearchBar/SearchBar";
import Filter from "./components/Filter/Filter";
import Randomize from "./components/Randomize/Randomize";
import OrderBy from "./components/OrderBy/OrderBy";
import voices from "../src/domain/voices.json";
import { connect } from "react-redux";
import { getFavouriteVoicesAction } from "../src/actions/getFavouriteVoicesAction";

let selectedVoice = null;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setTextFilter = this.setTextFilter.bind(this);
    this.getVoiceCategories = this.getVoiceCategories.bind(this);
    this.state = {
      textFilter: "",
      displayedVoices: voices,
      categories: []
    };
  }

  setTextFilter(val) {
    this.setState({ displayedVoices: voices.filter(voice => {
      return voice.name.toLowerCase().includes(val.toLowerCase())
    }) });
  }

  getVoiceCategories(){
    let tags = [];
    this.state.displayedVoices.forEach((voice) => {
      voice.tags.forEach((tag) => {
        if(!tags.includes(tag)) tags.push(tag);
      })
    })
    return tags.sort()
  }

  getRandomVoice(){
    let randomId = Math.floor(Math.random() * voices.length)+1;
    return voices[randomId]
  }
  render() {
    return (
      <div className="App">
        <div className="section">
          <header className="header">
            <div className="leftElements">
              <SearchBar searchBarInput={this.setTextFilter}></SearchBar>
            </div>
            <div className="rightElements">
              <Filter options={this.getVoiceCategories()}></Filter>
              <OrderBy options={['Descendent', 'Ascendent']}></OrderBy>
              <Randomize randomizedVoice={this.getRandomVoice}></Randomize>
            </div>
          </header>
        </div>
        {this.props.favouriteVoicesReducer.favouriteVoices.length > 0 && (
          <div className="section">
            <TitleSeparator title="Favourite voices" />
            <div className="voiceContainer">
              {this.props.favouriteVoicesReducer.favouriteVoices.map(
                (voice) => (
                  <Voice
                    title={voice.title}
                    id={voice.id}
                    icon={voice.icon}
                    tags={voice.tags}
                    active={selectedVoice === voice.id}
                  />
                )
              )}
            </div>
          </div>
        )}
        <div className="section">
          <TitleSeparator title="Pro Voices" />
          <div className="voiceContainer">
          {this.state.displayedVoices.map((voice) => (
              <Voice
                title={voice.name}
                id={voice.id}
                icon={voice.icon}
                tags={voice.tags}
                active={selectedVoice === voice.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  getFavouriteVoicesAction: (e) => {
    dispatch(getFavouriteVoicesAction(e));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
