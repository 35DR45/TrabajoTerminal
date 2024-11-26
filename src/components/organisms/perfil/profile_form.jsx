import { useContext,useState,useEffect } from "react";
import Profile_Button from "../../atoms/perfil/profile_button";
import Profile_Entry from "../../molecules/perfil/profile_entry";
import "../CSS/profile_form.css"
import { UserContext } from "../../../UserContext";
import { Link } from "react-router-dom";

export default function Profile_Form(){
    const { user,iduser } = useContext(UserContext);

    const [datos, setDatos] = useState({
        user: user, // Estado inicial como objeto con valores vacíos
        email: ''
    });
    
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
            <Link to={"/profile/progress"} ><button type="button" className="btn_profile_form"><Profile_Button text={"Cambiar contraseña"}/></button></Link>
        </form>
    )
}