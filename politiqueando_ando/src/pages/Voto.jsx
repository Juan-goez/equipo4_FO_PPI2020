import React from "react";
import Barra from "../components/Barra";
import Titulo_Voto from "../components/Titulo_Voto";
import Cards_Voto from "../components/Cards_Voto";
import Footer from "../components/Footer";

class Voto extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Barra />
                <Titulo_Voto />
                <Cards_Voto />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Voto;