import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Mapas from "./Mapas";
import Mapa2 from "./Mapa2";
import Mapa3 from "./Mapa3"
import Foros from "./Foros";
import Pregunta1 from "../../../React_PPI/react_ppi/src/Pregunta1";
import Ideologias from "./Ideologias";

function Navegacion(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/Ideologias" component={Ideologias}/>
            <Route exact path="/Ideologias/mapas" component={Mapas}/>
            <Route exact path="/Ideologias/foros" component={Foros}/>
            <Route exact path="/Ideologias/mapas/mapa2" component={Mapa2}/>
            <Route exact path="/Ideologias/mapas/mapa2/mapa3" component={Mapa3}/>
            <Route exact path="/Ideologias/mapas/mapa2/mapa3/foros" component={Foros}/>
            <Route exact path="/Ideologias/mapas/mapa2/mapa3/foros/pregunta1" component={Pregunta1}/>

        </Switch>
        </BrowserRouter>
    );
}
export default Navegacion;