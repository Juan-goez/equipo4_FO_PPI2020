import React from 'react';
import Nav from './Nav';
import Titulo from './Titulo';
import Body from './Body';
import Titulo_Instrucciones from './Titulo_Instrucciones';
import 'bootstrap/dist/css/bootstrap.min.css';
import BotonesInstrucciones from './BotonesInstrucciones';
import TextoInstrucciones from './TextoInstrucciones';



function ComoVotar () {
    return (
    <div>
    <Nav/>
    <Titulo/>
    <Body/>
    <Titulo_Instrucciones/>
    <TextoInstrucciones/>
    <BotonesInstrucciones/>
    </div>
    );
}

export default ComoVotar;