import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";
import TutorForm from "../organisms/tutor/tutorForm";
import like from '../../assets/iconLike.svg'
import disLike from '../../assets/iconDisLike.svg'
import {useContext} from "react";
import { UserContext } from "../../UserContext";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
export default function Tutor(){
    const { user,iduser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleApiCall = async (action) => {
        try {
            const response = await fetch('/api/Appreciate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    "action":action,
                    "idUsuario":iduser
                })
            });
            if(response.ok){
                const data = await response.json();
                //console.log("Respuesta de la API:", data.status);
                Swal.fire({
                    title:"Agradecemos tu apoyo.",
                    text:"Tu valoración ha sido enviada. ¡Muchas gracias!",
                    icon:'success',
                    background:'#811642',
                    color:'#f2ffeb',
                    showCancelButton: false,    
                    timer: 2000,
                    timerProgressBar:true,
                    didOpen: (popup) => { 
                        // Aplicar estilos directamente al popup
                        popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                        popup.style.borderRadius = '15px';       // Bordes redondeados
                      },
                }).then(()=> {
                    navigate(-1);
                })
            }
            
        } catch (error) {
            console.error("Error al consumir la API:", error);
            servErrorAlert(error)
        }
    }

    const servErrorAlert = async (error)=>{
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
    return(
        <>
            <Header/>
            <h2 className="Courses_Section">Tu tutor</h2>
            <form className="profile_container">
                <TutorForm/>
                <h3 className="h3-title">¿Recomiendas a este tutor?</h3>
                <div className="buttons_pair_row">
                    <img src={like} width="60px" onClick={() => handleApiCall("like")} style={{ cursor: "pointer" }} />
                    <img src={disLike} width="60px" onClick={() => handleApiCall("dislike")} style={{ cursor: "pointer" }}/>
                </div>
            </form>
            <Footer/>
        </>
    )
}