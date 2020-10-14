import React from "react";
import "./style.css"
import {Link} from 'react-router-dom';

class InfoMapa extends React.Component {

    render() {
        return (
            <div>
                <div className="MapaBandera">
                    <div>
                        <img className="ImagenMapa" src="https://i.ibb.co/Qc4yJTL/Dise-o-sin-t-tulo-50.png" alt="" />
                    </div>

                    <div STYLE="position:absolute; top:350px; left:500px;  visibility:visible  z-index:1">
                        <img classsName="Bandera" src="https://i.ibb.co/ZB7m3CS/bandera.png" width="300px" alt="" />

                    </div>
                </div>
                <div STYLE="position:absolute; top: 300px; left:150px;  visibility:visible  z-index:1" class="card_1">
                    <div class="card-body">
                        <h5 class="card-title">Guerra de los mil dias</h5>

                    </div>
                </div>
                <div STYLE="position:absolute; top:400px; left:60px;  visibility:visible  z-index:1" class="card_2">
                    <div class="card-body">
                        <p class="card-text">La Guerra de los Mil Días fue un conflicto civil de Colombia disputado entre el 17 de octubre de 1899 y el 21 de noviembre de 1902, por inconformidades ante políticas y resultados anteriores de la política de la Regeneración apoyada por el Partido Nacional 
políticos liberales y conservadores rechazaron medidas que consideraban exageradas por parte del gobierno, además radicales del partido Liberal buscaban formas de llegar al gobierno y otorgar cambios</p>

                    </div>
                </div>
                <div STYLE="position:absolute; top:700px; left:900px;  visibility:visible  z-index:1">
                <Link to="/Ideologias/mapas/mapa2/mapa3" className="Flecha"><img classsName="Flecha" src="https://i.ibb.co/wWv2GKF/Flecha.png" width="200px" alt="" /></Link>

                       

                    </div>


            </div>
        );
    }
}
export default InfoMapa;