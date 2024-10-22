import { Link, useLocation } from "react-router-dom";
import Btn_Login from "../../atoms/header/btn_Login";
import Btn_Register from "../../atoms/header/btn_Register";
import './CSS/grouped_Btns.css'

export default function Grouped_btns(){
    const location = useLocation(); // Obtener la ruta actual

    // Función para determinar qué botones mostrar según la ruta actual
    const renderButtons = () => {
        if (location.pathname === "/login") {
            return (
                <Link to={"/register"} className="btn-header"><Btn_Register/></Link>
            );
        } else if (location.pathname === "/register") {
            return (
                <Link to={"/login"} className="btn-header"><Btn_Login/></Link>
            );
        } else if (location.pathname === "/" || location.pathname === "/forgotten") {
            // Por defecto, mostrar ambos botones
            return (
                <>
                    <Link to={"/register"} className="btn-header"><Btn_Register/></Link>
                    <Link to={"/login"} className="btn-header"><Btn_Login/></Link>
                </>
            );
        }else {
            return (
                <>
                    TT 2024-B169
                </>
            );
        }
    };

    return (
        <div className="grouped-btns-container">
            {renderButtons()}
        </div>
    );
}
