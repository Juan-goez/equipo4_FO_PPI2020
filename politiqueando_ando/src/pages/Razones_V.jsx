import React from "react";
import Barra from "../components/Barra";
import Titulo_PVoto from "../components/Titulo_PVoto";
import Titulo_Razones from "../components/Titulo_Razones";
import Razones from "../components/Razones";
import Footer from "../components/Footer";

class Razones_V extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Barra />
                <Titulo_PVoto />
                <Titulo_Razones />
                <Razones />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Razones_V;