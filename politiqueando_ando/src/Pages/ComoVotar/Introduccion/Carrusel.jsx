import React from 'react';
import './style.css';

class Carrusel extends React.Component {
    render() {
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
        
            <div className="carousel-inner">
                <div className="item active">
                    <h1 class="Bien">Te damos la Bienvenida A: </h1>
                    <h1 class="nombre">POLITIQUEANDO ANDO</h1>
                    <img  class="log" src="https://i.ibb.co/XZjtqY5/Logo-6.png" alt=""/>
                </div>
                <div className="item">
                <h1 class="aprender">Juntos,aprenderemos sobre varios temas </h1>
                    <h1 class="aprender">Y</h1>
                    <h1 class="aprender">tendrás la posibilidad de estar más informado sobre:</h1>
                    <img class="manos" src="https://i.ibb.co/TRwGPT8/DDHH-manos2.png" />
                </div>
                <div className="item">
                <div class="item">
                    <div class="uno"> 
                        <p class="parr">Ideologías politicas</p>
                    </div>
                    <div class="uno">
                        <p class="parr">¿Cómo votar?</p>
                    </div>
                    <div class="uno">
                        <p class="parr">Por qué votar</p>
                    </div>
                    <div class="uno"> 
                        <p class="parr">Dónde votar</p>
                    </div>
                    <div class="uno"> 
                        <p class="parr">La democracia en la vida de las personas</p>
                    </div>

                </div>

        </div>
            </div>
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a clasName="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        )
    }
}

    export default Carrusel;