import Grouped_btns from '../../molecules/header/grouped_btns'
import { Link, useNavigate } from "react-router-dom";
import '../CSS/header.css'
import { useContext } from 'react';
import { UserContext } from '../../../UserContext';
import Swal from 'sweetalert2'

export default function Header(){
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogout = async () => {
        // Eliminar el usuario del contexto
        setUser(null);
        // Limpiar sessionStorage
        sessionStorage.removeItem('user');
        try {
            const response = await fetch('api/LogOut');
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
        }catch(error){
            Swal.fire({
                title: 'Ocurrió un error en el servidor, regresando al inicio.',
                text: `${error}`,
                icon: 'error',
                background: '#811642',
                color: '#f2ffeb',
                timer:3000,
                allowOutsideClick: false, // Evita que se cierre al hacer clic fuera
                timerProgressBar: true,
                didOpen: (popup) => {
                    Swal.showLoading();
                    popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                    popup.style.borderRadius = '15px';  // Mostrar indicador de carga
                },
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    navigate('/')
                }
            })
        }
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
        }else if(location.pathname === "/error"){
            return(
                <>
                    
                </>
            )
        }else{
            return (
                <>
                <Link to={"/"} className="btn-header" onClick={handleLogout}>Cerrar sesión</Link>
                
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