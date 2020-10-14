import React from "react";
import {Link} from 'react-router-dom';

class Contenido extends React.Component{
    render(){
        return (
            <div> 
                <div className="parrafo">
               <p className="parrafoideologias">
               Los diferentes pensamientos con relacion a la politica
              y la democracia han traido grandes hitos
               a la historia del país, en esta sección vamos a aprender las consecuencias
               que han traido las diferentes ideologias en el pais 
              </p>

               </div>
                
                <div className="imagenesideologias">
                    <img className="img_1" src="https://i.ibb.co/XSbR49t/Mano.png" width="300px" alt=""/>
                    <img  className="img_2" src="https://i.ibb.co/rcDMHkJ/cabeza.png" width="300px" alt=""/>
                </div>

                

        
            
               <div className="Boton_1">
               <Link to="/Ideologias/mapas" className="Boton1"><button type="button" className="btn btn-warning">MAPA</button></Link>
               </div>
               
               <div className="Boton_2">
               <Link to="/Ideologias/foros" className="Boton1"><button type="button" className="btn btn-warning">FOROS</button></Link>
               </div>
               
               <div>
                   <footer>Politiqueando Ando</footer>
               </div>
               
                 
                 
                 

               </div>
          
        
        );
    }
}
export default Contenido; 
