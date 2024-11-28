import Grouped_btns from '../../molecules/header/grouped_btns'
import { Link, useNavigate } from "react-router-dom";
import '../CSS/header.css'
import { useContext } from 'react';
import { UserContext } from '../../../UserContext';
import Swal from 'sweetalert2'

export default function Header(){
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        // Eliminar el usuario del contexto
        setUser(null);
        // Limpiar sessionStorage
        sessionStorage.removeItem('user');

        Swal.fire({
            title:"Cerrando sesión ",
            text:"Cargando...",
            icon:'success',
            background:'#811642',
            color:'#f2ffeb',
            showCancelButton: false,    
            timer: 2000,
            timerProgressBar:true,
            footer:'¡¡Hasta pronto!!',
            didOpen: (popup) => {
                Swal.showLoading();
                // Aplicar estilos directamente al popup
                popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                popup.style.borderRadius = '15px';       // Bordes redondeados
              },
        }).then(()=> {
            navigate("/");
        })
        
        // Redirigir a la página principal
        
    };
    const handleGoBack = () => {
        navigate(-1); // Navega hacia la página anterior
    };

    const renderLogo = () =>{

        if (location.pathname === "/" || location.pathname === "/login" || location.pathname === "/register" ||location.pathname === "/forgotten" ){
            return (
                <Link to={"/"}>TT 2024-B169</Link>
            );
        }else{
            return (
                <>
                <Link to={"/"} className="btn-header" onClick={handleLogout}>Cerrar sesión</Link>
                <Link to="#" className="btn-header" onClick={handleGoBack}>Regresar</Link>
                </>
            );
        }
        
    };

    return(
        <div className="header-container">
            <div className="grouped-btns-container">
                {renderLogo()}
            </div>
            <Grouped_btns/>
        </div>
    )
}