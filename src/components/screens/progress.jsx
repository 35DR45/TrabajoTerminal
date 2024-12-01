import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";
import { useEffect, useState, useContext } from "react";
import "./CSS/progress.css"
import { Link ,useNavigate} from "react-router-dom";
import Progress_Card from "../organisms/progress/progress_card";
import Profile_Button from "../atoms/perfil/profile_button";
import { UserContext } from "../../UserContext";
import Swal from 'sweetalert2'

export default function Progress(){
    const { user } = useContext(UserContext);
    const Data={
        usuario: user
    }
    const [subjects, setSubjects] = useState([]);
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
        const fetchSubjects = async () => {
        try {
            const response = await fetch('/api/Progreso',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Data)
            });; // Aquí va la URL de tu API
            const data = await response.json();
            setSubjects(data); 
        } catch (error) {
            console.error("Error fetching the subjects:", error);
            servErrorAlert(error)
        }
        };

        fetchSubjects();
    }, []); // El array vacío [] asegura que solo se ejecute una vez cuando el componente se monta

    // const materias = [{NombreMateria: "Statistical tools for data mining"}, {NombreMateria: "Introduction to Cryptography"}]

    return(
        <> 
            <Header/>
            <h2 className="Courses_Section">Tu progreso</h2>
            <div className="Course_Container">
            {subjects.map((subject, index) => (
                <div key={index}>
                    <p className="subject_name">{subject.Materia}</p>
                    <Progress_Card key={index} teo={subject.PTeo} pra={subject.PPra} tot={subject.PTot}/>
                </div>
            ))}
            </div>
            <div className="back_container">
                <Link to={"/profile"} ><button type="button" className="btn-back"><Profile_Button text={"Volver"}/></button></Link>
            </div>
            <Footer/>
        </>
    )
}