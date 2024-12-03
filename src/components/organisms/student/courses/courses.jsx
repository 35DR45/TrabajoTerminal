import ToolsImage from "../../../../assets/ToolsImage.png"
import "../../CSS/courses.css"
import { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import Card_Courses from "../../../molecules/student/card_courses/card_Courses";
import Swal from 'sweetalert2'
export default function Courses(){
    const navigate = useNavigate();
    const [subjects, setSubjects] = useState([]);
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
            const response = await fetch("/api/Cursos"); // Aquí va la URL de tu API
            const data = await response.json();
            setSubjects(data); // Asumo que 'data' es un array de materias
        } catch (error) {
            console.error("Error fetching the subjects:", error);
            servErrorAlert(error)
        }
        };

        fetchSubjects();
    }, []); // El array vacío [] asegura que solo se ejecute una vez cuando el componente se monta

    // const materias = [{NombreMateria: "Statistical tools for data mining"}, {NombreMateria: "Introduction to Cryptography"}]

    console.log(subjects);

    return(
        <> 
            <div className="Course_Container">
            {subjects.map((subject, index) => (
                <Card_Courses key={index} courseName={subject.NombreMateria} img={subject.ImagenMateria} id={subject.idMateria}/>
            ))}
            </div>
            <Link to={"/tools"} className="Tools_container" >
                <div className="tools_div_container">
                    <img className="tools_image" src={ToolsImage} alt="Logo de herrramientas"/>
                    <h3>Herramientas</h3>
                </div>
            </Link>
        </>
    )
}