import React from 'react';
import ReactDOM from 'react-dom/client';
import Intro from './Intro';
import Song from './Song';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Intro />
    <Song/>
  
  </React.StrictMode>,
)
