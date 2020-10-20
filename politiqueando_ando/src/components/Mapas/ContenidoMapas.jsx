import React from "react";
import "./style.css"
import {Link} from 'react-router-dom';


class ContenidoMapas extends React.Component{
    render(){
        return (
            <div className="MapaBandera">
                <div>
                <img className="ImagenMapa" src="https://i.ibb.co/Qc4yJTL/Dise-o-sin-t-tulo-50.png" alt=""/>
                </div>

                <div STYLE="position:absolute; top:350px; left:500px;  visibility:visible  z-index:1">
               
                <Link to="/Ideologias/mapas/mapa2" className="Bandera"> <img  classsName="Bandera" src="https://i.ibb.co/ZB7m3CS/bandera.png" width="300px" alt=""/></Link>
               
                <div STYLE="position:absolute; top:1px; left:400px;  visibility:visible  z-index:1" class="card">
                <div class="card-body">
                <h5 class="card-title_Mapas">Bienvenido al mapa de ideologias</h5>
                <p class="card-text_Mapas">Presiona en la bandera para entrar a tu recorrido</p>
    
  </div>
</div>

            </div>
            </div>
          

        );
    }
}
export default ContenidoMapas;

