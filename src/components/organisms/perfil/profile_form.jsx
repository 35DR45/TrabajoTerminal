import { useContext,useState,useEffect } from "react";
import Profile_Button from "../../atoms/perfil/profile_button";
import Profile_Entry from "../../molecules/perfil/profile_entry";
import "../CSS/profile_form.css"
import { UserContext } from "../../../UserContext";
import { Link ,useNavigate} from "react-router-dom";
import Swal from 'sweetalert2'
export default function Profile_Form(){
    const { user,iduser } = useContext(UserContext);

    const [datos, setDatos] = useState({
        user: user, // Estado inicial como objeto con valores vacíos
        email: ''
    });
    const navigate = useNavigate();
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

    useEffect(() => {
        // Función para obtener los datos de la API
        const fetchPhone = async () => {
        try {
            const response = await fetch(`/api/seeUser/${iduser}`); 
            const data = await response.json();
            console.log(data)
            setDatos({
                user: data[0].NombreUsuario,
                email: data[0].Correo
            });
        } catch (error) {
            servErrorAlert(error)
            console.error("Error fetching tutor:", error);
        }
        };
        fetchPhone();
    }, [iduser]); // El array vacío [] asegura que solo se ejecute una vez cuando el componente se monta
    
    return(
        <form className="profile_form">
            <Profile_Entry labelText={"Nombre: "} placeText={"Nombre de usuario"} fetchVal={datos.user} type={"text"}/>
            <Profile_Entry labelText={"Contacto:"} placeText={"Número telefonico"} fetchVal={datos.email} type={"text"}/>
            <Link to={"/update/user"} ><button type="submit" className="btn_profile_form"><Profile_Button text={"Actualizar datos"}/></button></Link>
            <Link to={"/update/pass"} ><button type="button" className="btn_profile_form"><Profile_Button text={"Cambiar contraseña"}/></button></Link>
        </form>
    )
}