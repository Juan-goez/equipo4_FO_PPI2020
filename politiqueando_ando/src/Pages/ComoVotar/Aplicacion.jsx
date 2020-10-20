import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ComoVotar from './ComoVotar';
import DeberHacer from './DeberHacer';
import NoDeberHacer from './NoDeberHacer';



function Aplicacion() {
    return(
        <BrowserRouter>
        <Switch>
        <Route exact path="/politiqueando" component={ComoVotar}/>
        <Route exact path="/politiqueando/deber" component={DeberHacer}/>
        <Route exact path="/politiqueando/deber/nodeber" component={NoDeberHacer}/>
        
        </Switch>
        </BrowserRouter>
    )
    
}
export default Aplicacion;