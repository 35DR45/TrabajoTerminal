import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile_Button from "../../atoms/perfil/profile_button"
import Profile_Entry from "../../molecules/perfil/profile_entry"
import { UserContext } from "../../../UserContext";
import Swal from 'sweetalert2'

const TutoradoForm = () =>{
    const { user,iduser } = useContext(UserContext);
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        usuario: '',
        correo: ''
    });

    useEffect(() => {
        // Función para obtener los datos de la API
        const fetchTutor = async () => {
        try {
            const response = await fetch(`/api/verUsuario/${iduser}`); 
            const data = await response.json();
           

            setUserData({
                usuario: data.Nombre,
                correo: data.Correo
            });


            
            if(data.Nombre === undefined){
                servErrorAlert()
            }
        } catch (error) {
            console.error("Error fetching tutor:", error);
            servErrorAlert(error)
        }
        };

        fetchTutor();
    }, []); // El array vacío [] asegura que solo se ejecute una vez cuando el componente se monta
    const servErrorAlert = async (error)=>{
        Swal.fire({
            title: 'Tutorado no disponible',
            text: `Regresando`,
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
                navigate(-1)
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("HOLAAAAA")
        try{
            const response = await fetch(`api/unPair/${iduser}`);
            if (response.ok) {
                // Redirige al usuario a la URL /registrado
                const data = await response.json();
                Swal.fire({
                    title:"Usuario desasignado",
                    text:"Ahora no tienes un usuario asignado",
                    icon:'error',
                    background:'#811642',
                    color:'#f2ffeb',
                    showCancelButton: false,    
                    timer: 2000,
                    timerProgressBar:true,
                    footer:'Si quieres tener un usuario asignado debes de seguir con las lecciones, tener buena calificación y permitir ser un tutor',
                    didOpen: (popup) => {
                        Swal.showLoading();
                        // Aplicar estilos directamente al popup
                        popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                        popup.style.borderRadius = '15px';       // Bordes redondeados
                      },
                }).then(()=> {
                    navigate(-1);
                })
            } else {
                
            }
        }catch(error){
            console.log('Error: ', error);
            servErrorAlert(error)
        }
    };
    
    return(
        <form className="profile_form">
            <Profile_Entry labelText={"Nombre de tu tutorado: "} fetchVal={userData.usuario} type={"text"}/>
            <Profile_Entry labelText={"Correo de tu tutorado: "} fetchVal={userData.correo} type={"text"}/>
           {<button type="button" className="btn-register-form" onClick={handleSubmit} ><Profile_Button text={"Dar de baja usuario"}/></button>}
        </form>
    )
}

export default TutoradoForm