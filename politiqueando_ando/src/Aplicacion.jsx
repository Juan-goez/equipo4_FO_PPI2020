import React from "react";
import { BrowserRouter, Switch , Route} from "react-router-dom";
import Vida_Politica from '../src/pages/vistas/Vida_Politica';
import Vida_Politica_Niño from '../src/pages/vistas/Vida_Politica_Niño';
import Vida_Politica_Colegio from "./pages/vistas/Vida_Politica_Colegio";
import Vida_Politica_Adolescente from "./pages/vistas/Vida_Politica_Adolescente";
import Vida_Politica_Adulto from "./pages/vistas/Vida_Politica_Adulto";
import Pregunta from "./pages/vistas/Pregunta";

function Aplicacion(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/Vida_Politica" component={Vida_Politica}/>         
        </Switch>
        <Switch>
            <Route exact path="/Vida_Politica_Niño" component={Vida_Politica_Niño}/>         
        </Switch>
        <Switch>
            <Route exact path="/Vida_Politica_Colegio" component={Vida_Politica_Colegio}/>         
        </Switch>
        <Switch>
            <Route exact path="/Vida_Politica_Adolescente" component={Vida_Politica_Adolescente}/>         
        </Switch>
        <Switch>
            <Route exact path="/Vida_Politica_Adulto" component={Vida_Politica_Adulto}/>         
        </Switch>
        <Switch>
            <Route exact path="/Vida_Politica_Pregunta" component={Pregunta}/>         
        </Switch>
        </BrowserRouter>
    );
}
export default Aplicacion;