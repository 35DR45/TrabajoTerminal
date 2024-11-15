import { useContext, useEffect, useState } from "react";
import Profile_Button from "../../atoms/perfil/profile_button"
import Profile_Entry from "../../molecules/perfil/profile_entry"
import { UserContext } from "../../../UserContext";

const TutorForm = () =>{
    const { user } = useContext(UserContext);
    const [tutorData, setTutorData] = useState({
        tutor: '',
        phone: ''
    });

    useEffect(() => {
        // Función para obtener los datos de la API
        const fetchTutor = async () => {
        try {
            const response = await fetch(`/api/verTutor/${user}`); 
            const data = await response.json();
            console.log(data)
            setTutorData({
                tutor: data.Nombre,
                phone: data.Telefono
            });
        } catch (error) {
            console.error("Error fetching tutor:", error);
        }
        };

        fetchTutor();
    }, []); // El array vacío [] asegura que solo se ejecute una vez cuando el componente se monta
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("HOLAAAAA")
        try{
            const response = await fetch(`api/Pair/${user}`);
            if (response.ok) {
                // Redirige al usuario a la URL /registrado
                const data = await response.json();
            } else {
                console.error('Usuario no registrado');
            }
        }catch(error){
            console.log('Error: ', error);
        }
    };
    
    return(
        <form className="profile_form">
            <Profile_Entry labelText={"Nombre de tu tutor: "} value={tutorData.tutor} type={"text"}/>
            <Profile_Entry labelText={"Contacto de tu tutor: "} value={tutorData.phone} type={"text"}/>
           {/* <button type="button" className="btn-register-form" onClick={handleSubmit} ><Profile_Button text={"Muéstrame otro tutor"}/></button>*/}
        </form>
    )
}

export default TutorForm