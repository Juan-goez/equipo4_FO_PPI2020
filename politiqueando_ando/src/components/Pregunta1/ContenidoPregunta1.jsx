import React from "react";
import "./style.css"

class ContenidoPregunta1 extends React.Component {
    render() {
        return (
            <div className="ParrafoP">
                <div>
                    <p className="ParrafoPregunta1">En esta pregunta cada persona dara su opinion sobre por que son importantes las ideologias ya sea en su vida o en un país</p>
                    <p className="ParrafoPregunta1">¡Recuerda respetar la opinion de los demás y no usar vocabulario que pueda ofender a otra persona!</p>
                </div>
                    <div>
                    <div  class="form-group">
                    <input type="text" class="form-control" placeholder="Ingresa aquí tu comentario"/>
                     </div>
                    </div>
                    <div>
                    <button type="button_pregunta" className="btn btn-warning_pregunta">Publicar</button>
                    </div>
                    </div>
        );
    }
}
export default ContenidoPregunta1;
