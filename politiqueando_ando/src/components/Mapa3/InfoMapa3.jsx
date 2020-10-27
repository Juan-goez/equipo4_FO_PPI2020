import React from "react";
import './style.css'
import {Link} from 'react-router-dom';

class InfoMapa3 extends React.Component {

    render() {
        return (
            <div>
                <div className="MapaBandera">
                    <div>
                        <img className="ImagenMapa" src="https://i.ibb.co/Qc4yJTL/Dise-o-sin-t-tulo-50.png" alt="" />
                    </div>

                    <div STYLE="position:absolute; top:350px; left:370px;  visibility:visible  z-index:1">
                        <img classsName="Bandera" src="https://i.ibb.co/ZB7m3CS/bandera.png" width="300px" alt="" />

                    </div>
                </div>
                <div STYLE="position:absolute; top: 200px; left:950px;  visibility:visible  z-index:1" class="card_1">
                    <div class="card-body">
                        <h5 class="card-title">Batalla de boyaca</h5>

                    </div>
                </div>
                <div STYLE="position:absolute; top:300px; left:850px;  visibility:visible  z-index:1" class="card_3">
                    <div class="card-body">
                        <p class="card-text">La batalla del Puente de Boyacá fue la confrontación más importante de la guerra de independencia de Colombia que garantizó el éxito de la Campaña Libertadora de Nueva Granada. Este acontecimiento tuvo lugar el día 7 de agosto de 1819 en el cruce del río Teatinos, en inmediaciones de Tunja.</p>

                    </div>
                </div>
                <div STYLE="position:absolute; top:700px; left:900px;  visibility:visible  z-index:1">
                <Link to="/Ideologias/mapas/mapa2/mapa3/foros" className="Foros"><img classsName="Flecha_2" src="https://i.ibb.co/wWv2GKF/Flecha.png" width="200px" alt="" /></Link>

                    </div>


            </div>
        );
    }
}
export default InfoMapa3;