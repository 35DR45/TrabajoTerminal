import Grouped_btns from '../../molecules/header/grouped_btns'
import { Link, Navigate } from "react-router-dom";
import '../CSS/header.css'
import { useContext } from 'react';
import { UserContext } from '../../../UserContext';

export default function Header(){
    const { setUser } = useContext(UserContext);

    const handleLogout = () => {
        // Eliminar el usuario del contexto
        setUser(null);
        // Limpiar sessionStorage
        sessionStorage.removeItem('user');
        // Redirigir a la página principal
        Navigate("/");
    };

    const renderLogo = () =>{

        if (location.pathname === "/" || location.pathname === "/login" || location.pathname === "/register"){
            return (
                <Link to={"/"}>TT 2024-B169</Link>
            );
        }else{
            return (
                <Link to={"/"} className="btn-header" onClick={handleLogout}>Cerrar sesión</Link>
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