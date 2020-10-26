import React from "react";
import Barra from "../components/Barra"
import C_Bienvenida from "../components/C_Bienvenida";
import Titulo1 from "../components/Titulo1";
import Titulo_Temas from "../components/Titulo_Temas";
import Temas from "../components/Temas";
import Intro_Foros from "../components/Intro_Foros";
import Footer from "../components/Footer";

class Pantalla1 extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Barra />
                <C_Bienvenida />
                <Titulo1 />
                <Titulo_Temas />
                <Temas />
                <Intro_Foros />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Pantalla1;