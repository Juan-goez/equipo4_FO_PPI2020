import React from 'react';
import './App.css';
import Menu from "./components/pages/Foros/Menu"
import TituloForos from "./components/pages/Foros/TituloForos"
import ContenidoForos from "./components/pages/Foros/ContenidoForos";
function Foros() {
  return (
    <div>
      < Menu/>
      <TituloForos/>
      <ContenidoForos/>
      
      
    </div>
  );
}

export default Foros;
