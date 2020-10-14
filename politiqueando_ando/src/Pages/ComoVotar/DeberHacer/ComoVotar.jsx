import React from 'react';
import Nav from './Pages/ComoVotar/Nav';
import Titulo from './Pages/ComoVotar/Titulo';
import Body from './Pages/ComoVotar/Body';
import Titulo_Instrucciones from './Pages/ComoVotar/Titulo_Instrucciones';
import 'bootstrap/dist/css/bootstrap.min.css';
import BotonesInstrucciones from './Pages/ComoVotar/BotonesInstrucciones';
import TextoInstrucciones from './Pages/ComoVotar/TextoInstrucciones';



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