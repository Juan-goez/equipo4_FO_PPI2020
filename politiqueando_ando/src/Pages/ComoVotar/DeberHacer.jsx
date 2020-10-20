import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './DeberHacer/Nav';
import Cards from './DeberHacer/Cards';
import Titulo from './DeberHacer/Titulo';


function DeberHacer() {
    return (
        <div>
            <Nav />
            <Titulo />
            <Cards />

        </div>
    );
}

export default DeberHacer;
