import React from "react";
import "./style.css"; 
import {Link} from 'react-router-dom';

class ContenidoForos extends React.Component{
    render(){
        return (
            <div>
               
               <div STYLE="position:absolute; top:300px; left:400px;  visibility:visible  z-index:1" class="card_Foros-body">
                <div class="card_Foros-body">
                <Link to="/Ideologias/mapas/mapa2/mapa3/foros/pregunta1" className="card-text_Foros"><p class="card-text_Foros">¿Por qué son importantes las ideologias?</p></Link>

                </div>
    
                    </div>
                    <div STYLE="position:absolute; top:500px; left:400px;  visibility:visible  z-index:1" class="card_Foros-body">
                <div class="card_Foros-body">
               
                <p class="card-text_Foros">¿Con que ideal politico estas de acuerdo?</p>
                </div>
    
                    </div>
                    <div STYLE="position:absolute; top:700px; left:400px;  visibility:visible  z-index:1" class="card_Foros-body">
                <div class="card_Foros-body">
               
                <p class="card-text_Foros">¿Que opinas de las consecuencias causadas por las ideologias politicas?</p>
                </div>
    
                    </div>
                </div>

          
        );
    }
}
export default ContenidoForos;

