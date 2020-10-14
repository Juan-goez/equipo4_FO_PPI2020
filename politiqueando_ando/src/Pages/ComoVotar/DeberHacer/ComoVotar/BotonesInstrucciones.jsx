import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

class BotonesInstrucciones extends React.Component {
    render() {
        return (
            
    <div class="opcionesIntrucciones">
    <div class="deberHacer"> 
    <Link to="/politiqueando/deber" className="deber"><button type="button" class="btn btn-light">Lo que deberías de hacer</button></Link>
    </div>

    <div class="noHacer">
    <Link to="/politiqueando/deber/nodeber" className="deber"><button type="button" class="btn btn-light">Lo que no deberías de hacer</button></Link>

    </div>
    <div class="simulador">
    <Link to="/politiqueando/deber/nodeber/simulador" className="deber"><button type="button" class="btn btn-light">Simulador</button></Link>

    </div>
    </div>
    
        )
    }
}
export default BotonesInstrucciones;