import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";
import Imagen from "../../assets/404.jpg";
import "./CSS/error.css";
import { Link } from "react-router-dom";

export default function Error(){
    return(
        <>
            <Header/>
            <div className="container_error">
                <h1>Error 404, este recurso no está disponible ¡Lo sentimos!</h1>
                <div className="container_regresar">
                    <h2>No te preocupes, siempre puedes</h2>
                    <Link to={"/"}>volver al inicio</Link>
                </div>
                <img className="img_404" src={Imagen}/>
            </div>
            <Footer/>
        </>
    )
}