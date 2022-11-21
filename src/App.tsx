import React, { useState } from 'react';

import * as Component from './components';

function App() {
  const [cheatMode, setCheatMode] = useState(false);

  return (
    <div className="wrapper">
      <div className="header">
        <h1 className="header__title">
          Memory Game
        </h1>
        <Component.Button
          label={cheatMode ? 'Disable cheat mode' : 'Enable cheat mode'}
          onClick={() => setCheatMode((prevCheatMode) => !prevCheatMode)}
        />
      </div>
      <Component.Board cheatMode={cheatMode} />
    </div>
  );
}

export default App;
