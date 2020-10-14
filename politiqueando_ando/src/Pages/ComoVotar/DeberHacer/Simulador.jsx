import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Simulador/Nav';
import Titulo from './Simulador/Titulo';
import Texto from './Simulador/Texto';


function Simulador() {
    return (
        <div>
            <Nav />
            <Titulo />
            <Texto />
        </div>
    );
}

export default Simulador;
