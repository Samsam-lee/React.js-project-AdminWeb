import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Routes/Root'

//pages
import {youtuberInfo} from './pages/Youtuber/Information'

ReactDOM.render(
  <React.StrictMode>
    <youtuberInfo/>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
