import Grouped_btns from '../../molecules/header/grouped_btns'
import { Link } from "react-router-dom";
import '../CSS/header.css'

export default function Header(){

    const renderLogo = () =>{

        if (location.pathname === "/student"){
            return (
                <Link to={"/"} className="btn-header">Cerrar sesión</Link>
            );
        }else{
            return (
                <Link to={"/"}>TT 2024-B169</Link>
            );
        }
        
    };

    return(
        <div className="header-container">
            <div>
                {renderLogo()}
            </div>
            <Grouped_btns/>
        </div>
    )
}