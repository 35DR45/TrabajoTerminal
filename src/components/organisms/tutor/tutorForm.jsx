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
            const response = await fetch(`/api/getTutor/${user}`); 
            const data = await response.json();
            console.log(data)
            setTutorData({
                tutor: data.Nombre,
                phone: data.Telefono
            });
        } catch (error) {
            console.error("Error fetching the temario:", error);
        }
        };

        fetchTutor();
    }, []); // El array vacío [] asegura que solo se ejecute una vez cuando el componente se monta
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        //const hashedPassword = await bcrypt.hash(password, 10); 
        const FormData = {
            user: username, 
            pass: password
        }
        try{
            const response = await fetch('api/Pair',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(FormData)
            });
            if (response.ok) {
                // Redirige al usuario a la URL /registrado
                const data = await response.json();
                setUser(username)
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
            <button type="submit" className="btn-register-form" onSubmit={handleSubmit}><Profile_Button text={"Muéstrame otro tutor"}/></button>
        </form>
    )
}

export default TutorForm