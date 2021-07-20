import React, { useState } from 'react';
import logo from './assets/logo-atelier15.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="container">
        <span className="title">
          L'Atelier 15 ouvre ses portes très bientôt&nbsp;!
        </span>
        <img className="logo" src={logo} />
        <span className="info">Site en construction</span>
      </div>
    </div>
  );
}

export default App;
