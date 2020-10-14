import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Pages/DeberHacer/Nav';
import Cards from './Pages/DeberHacer/Cards';
import Titulo from './Pages/DeberHacer/Titulo';


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
