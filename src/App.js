import React from 'react';
import './App.css';
import Voice from './components/Voice/Voice';
import TitleSeparator from './components/TitleSeparator/TitleSeparator';
import voices from '../src/domain/voices.json';
import { connect } from 'react-redux';
import { getFavouriteVoicesAction } from '../src/actions/getFavouriteVoicesAction';



let selectedVoice = null;

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-body">
        <div className="voiceSection">
              <TitleSeparator title="Favourite voices"/>
              <div className="voiceContainer">
              {this.props.favouriteVoicesReducer.favouriteVoices.map((voice) =>
                <Voice title={voice.title} id={voice.id} icon={voice.icon} tags={voice.tags} active={selectedVoice === voice.id}/>
              )}
              </div>
        </div>
          <div className="voiceSection">
          <TitleSeparator title="Pro Voices"/>
          <div className="voiceContainer">
            {voices.map((voice) => <Voice title={voice.name} id={voice.id} icon={voice.icon} tags={voice.tags} active={selectedVoice === voice.id}/>)}
          </div>
        </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
 })

   
const mapDispatchToProps = (dispatch) => ({
  getFavouriteVoicesAction: (e) => {
       dispatch(getFavouriteVoicesAction(e))
   }
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
