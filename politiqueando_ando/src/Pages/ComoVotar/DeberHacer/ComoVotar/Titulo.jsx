import React from "react";
import "./style.css"; 

class Titulo extends React.Component{
    render(){
        return (
    <div class="text-nowrap bd-highlight" >
        <h1 class="comoVotar">VOTO:</h1>
        <h2 class="hacerlo">Como hacerlo de manera correcta</h2>
    </div>
        );
    }
}
export default Titulo;