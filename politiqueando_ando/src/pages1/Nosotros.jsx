import React from "react";
import Barra from "../components/Barra";
import Titulo_Nosotros from "../components/Titulo_Nosotros";

class Nosotros extends React.Component{ 
    render(){ 
        return(
            <React.Fragment>
                <Barra />
                <Titulo_Nosotros/>
            </React.Fragment>
        );
    }
}

export default Nosotros;
