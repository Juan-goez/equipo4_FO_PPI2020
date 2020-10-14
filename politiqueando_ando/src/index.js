import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Ideologias';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mapas from "./Mapas";
import Mapa2 from "./Mapa2.jsx";
import Mapa3 from "./Mapa3";
import Foros from "./Foros"
import Navegacion from "./Navegacion";
import Pregunta1 from "./Pregunta1";

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


ReactDOM.render(
  <React.StrictMode>
    <Mapas/>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Mapa2/>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Mapa3/>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Foros/>
  </React.StrictMode>,
  document.getElementById('root')
); 


ReactDOM.render(
  <React.StrictMode>
    <Pregunta1/>
  </React.StrictMode>,
  document.getElementById('root')
);*/

ReactDOM.render(
  <React.StrictMode>
    <Navegacion/>
  </React.StrictMode>,
  document.getElementById('root')
);