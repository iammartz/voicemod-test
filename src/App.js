import React from "react";
import "./simple-grid.min.css";
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
import { toggleFavouriteVoice } from "./actions/toggleFavouriteVoice";

let selectedVoice = null;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setTextFilter = this.setTextFilter.bind(this);
    this.getVoiceCategories = this.getVoiceCategories.bind(this);
    this.handleOrderBy = this.handleOrderBy.bind(this);
    this.handleCategoryFilter = this.handleCategoryFilter.bind(this);
    this.state = {
      textFilter: "",
      displayedVoices: voices,
      categories: [],
    };
  }

  componentDidMount() {
    let storedVoices = JSON.parse(localStorage.getItem("favouriteVoices"));
    if (storedVoices)
      storedVoices.forEach((voice) => this.props.toggleFavouriteVoice(voice));
  }

  setTextFilter(val) {
    this.setState({
      displayedVoices: voices.filter((voice) => {
        return voice.name.toLowerCase().includes(val.toLowerCase());
      }),
    });
  }

  getVoiceCategories() {
    if (!this.state.categories.length) {
      let tags = [];
      this.state.displayedVoices.forEach((voice) => {
        voice.tags.forEach((tag) => {
          if (!tags.includes(tag)) tags.push(tag);
        });
      });
      this.setState({ categories: tags });
    }
    return this.state.categories.sort();
  }

  getRandomVoice() {
    let randomId = Math.floor(Math.random() * voices.length) + 1;
    return voices[randomId];
  }

  handleOrderBy(orderBy) {
    if (orderBy.toLowerCase() === "descendent")
      this.setState({ displayedVoices: this.state.displayedVoices.sort() });
    else {
      this.setState({ displayedVoices: this.state.displayedVoices.reverse() });
    }
  }

  handleCategoryFilter(filter) {
    if (filter === "default") {
      this.setState({ displayedVoices: voices });
    } else {
      return this.setState({
        displayedVoices: voices.filter((voice) => {
          return voice.tags.includes(filter);
        }),
      });
    }
  }

  render() {
    return (
      <div className="App container">
        <header className="header container">
          <div className="row flex">
            <div className="leftElements col-6">
              <SearchBar searchBarInput={this.setTextFilter}></SearchBar>
            </div>
            <div className="rightElements col-6">
              <Filter
                options={this.getVoiceCategories()}
                filter={this.handleCategoryFilter}
              ></Filter>
              <OrderBy
                options={["Descendent", "Ascendent"]}
                filter={this.handleOrderBy}
              ></OrderBy>
              <Randomize randomizedVoice={this.getRandomVoice}></Randomize>
            </div>
          </div>
        </header>
        <div className="separator"></div>
        {this.props.favouriteVoicesReducer.favouriteVoices.length > 0 && (
          <>
            <div className="row">
              <TitleSeparator title="Favourite voices" />
            </div>
            <div className="row">
              <div className="voiceContainer row">
                {this.props.favouriteVoicesReducer.favouriteVoices.map(
                  (voice) => (
                    <div key={voice.id} className="col-2">
                      <Voice
                        title={voice.title}
                        id={voice.id}
                        icon={voice.icon}
                        tags={voice.tags}
                        active={selectedVoice === voice.id}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </>
        )}
        <div className="row">
          <div className="col-12">
            <TitleSeparator title="Pro Voices" />
          </div>
        </div>
        <div className="voiceContainer row">
          {this.state.displayedVoices.map((voice) => (
            <div key={voice.id} className="col-2">
              <Voice
                title={voice.name}
                id={voice.id}
                icon={voice.icon}
                tags={voice.tags}
                active={selectedVoice === voice.id}
              />
            </div>
          ))}
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
  toggleFavouriteVoice: (e) => {
    dispatch(toggleFavouriteVoice(e));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
