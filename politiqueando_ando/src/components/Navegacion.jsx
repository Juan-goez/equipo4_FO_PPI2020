import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Mapas from "../components/Mapas";
import Mapa2 from "../components/Mapa2";
import Mapa3 from "../components/Mapa3"
import Foros from "../components/Foros";
import Pregunta1 from "../components/Pregunta1";
import Ideologias from "../components/Ideologias";

function Navegacion(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/Ideologias" component={Ideologias}/>
            <Route exact path="/Ideologias/mapas" component={Mapas}/>
            <Route exact path="/Ideologias/foros" component={Foros}/>
            <Route exact path="/Ideologias/mapas/mapa2" component={Mapa2}/>
            <Route exact path="/Ideologias/mapas/mapa2/mapa3/foros" component={Foros}/>
            <Route exact path="/Ideologias/mapas/mapa2/mapa3/foros/pregunta1" component={Pregunta1}/>
             <Route exact path="/Ideologias/mapas/mapa2/mapa3" component={Mapa3}/>
            
           

        </Switch>
        </BrowserRouter>
    );
}
export default Navegacion;