import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Aplicacion from './Aplicacion';
import Introduccion from './introduccion.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Aplicacion/>
  </React.StrictMode>,
  document.getElementById('root')
);

/*ReactDOM.render(
  <React.StrictMode>
    <Introduccion/>
  </React.StrictMode>,
  document.getElementById('root')
);*/
