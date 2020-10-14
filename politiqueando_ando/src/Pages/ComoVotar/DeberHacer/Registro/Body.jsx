import React from 'react';
import './style.css';

class Body extends React.Component {
    render() {
        return (
    <body>
    <form>
        <div class="form-groupp">
            <h1 for="formGroupExampleInput">REGISTRO</h1>
        </div>
        <div  class="form-group">
        <input type="text" class="form-control" placeholder="Nombre de usuario" />
        </div>
        <div class="form-group">
            <input type="password" size="20" maxlength="20" class="form-control" placeholder="Contraseña"/>
        </div>
        <div class="form-group">
            <input type="password" size="20" maxlength="20" class="form-control" placeholder="Confirmar contraseña"/>
        </div>
    </form>

    <div className="iconos">
    <button type="button" className="btn btn-outline-primary">
        <img src="https://i.ibb.co/hYmkwr2/icono-facebook.png" width="40px" /> 
    </button>
    
    <button type="button" className="btn btn-outline-primary">
    <img src="https://i.ibb.co/Kjz5Ljz/gooogle.png"  width="40px"/>
    </button>
    </div>

    <div className="registr">
    <button type="button" className="btnr btn-outline">Registrarse</button>   
    </div> 
    </body>

)
    }
} 
export default Body; 