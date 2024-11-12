import Profile_Button from "../../atoms/perfil/profile_button"
import Profile_Entry from "../../molecules/perfil/profile_entry"


const TutorForm = () =>{
    return(
        <form className="profile_form">
            <Profile_Entry labelText={"Nombre de tu tutor: "} value={"Nombre"} type={"text"}/>
            <Profile_Entry labelText={"Contacto de tu tutor: "} value={"Teléfono"} type={"text"}/>
            <button type="submit" className="btn-register-form"><Profile_Button text={"Muéstrame otro tutor"}/></button>
        </form>
    )
}

export default TutorForm