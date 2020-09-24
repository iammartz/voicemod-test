import React from 'react';
import './App.css';
import Voice from './components/Voice/Voice';
import TitleSeparator from './components/TitleSeparator/TitleSeparator';
import voices from '../src/domain/voices.json';

const favouriteVoices = false;

function App() {
  return (
    <div className="App">
      <header className="App-body">
      <div className="voiceSection">
        {favouriteVoices && (
          <>
            <TitleSeparator title="Favourite voices"/>
            <div className="voiceContainer">
              <Voice title="cat"/>
              <Voice title="cat"/>
            </div>
          </>
        )}
      </div>
        <div className="voiceSection">
        <TitleSeparator title="Pro Voices"/>
        <div className="voiceContainer">
          {voices.map((voice) => <Voice title={voice.name} id={voice.id} icon={voice.icon} tags={voice.tags}/>)}
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
