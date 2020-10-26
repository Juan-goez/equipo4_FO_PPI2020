import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer">
                    <p className="footer_parrafo">POLITIQUEANDO ANDO</p>
                    <p className="footer_parrafo">2020</p>
                    <div className="footer_contenedor">
                        <a href=""><img className="footer_image" src="https://i.ibb.co/DVnnv4L/Instagram.png" alt=""/></a>
                        <a href=""><img className="footer_image" src="https://i.ibb.co/SKVWhg2/Facebook.png" alt=""/></a>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;