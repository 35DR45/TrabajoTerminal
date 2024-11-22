import { useContext } from "react";
import Profile_Button from "../../atoms/perfil/profile_button";
import Profile_Entry from "../../molecules/perfil/profile_entry";
import "../CSS/profile_form.css"
import { UserContext } from "../../../UserContext";


export default function Profile_Form(){
    const { user } = useContext(UserContext);

    return(
        <form className="profile_form">
            <Profile_Entry labelText={"Nombre: "} placeText={"Nombre de usuario"} fetchVal={user} type={"text"}/>
            <Profile_Entry labelText={"Contacto: "} placeText={"Número telefonico"} type={"tel"}/>
            <button type="submit" className="btn_profile_form"><Profile_Button text={"Actualizar datos"}/></button>
            <button type="button" className="btn_profile_form"><Profile_Button text={"Cambiar contraseña"}/></button>
        </form>
    )
}