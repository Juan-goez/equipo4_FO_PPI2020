import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Pantalla1 from "../pages/Pantalla1";
import Razones_V from "../pages/Razones_V";
import Inicio_Sesion from "../pages/Inicio_Sesion";
import Voto from "../pages/Voto";
import Nosotros from "../pages/Nosotros";

function Aplicacion (){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/politiqueando" component={Pantalla1} />;
                <Route exact path="/politiqueando/razones" component={Razones_V} />;
                <Route exact path="/politiqueando/Inicio-Sesion" component={Inicio_Sesion} />;
                <Route exact path="/politiqueando/voto" component={Voto} />;
                <Route exact path="/politiqueando/Nosotros" component={Nosotros} />;
            </Switch>
        </BrowserRouter>
    );
}

export default Aplicacion;