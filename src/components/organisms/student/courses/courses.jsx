import ToolsImage from "../../../../assets/ToolsImage.png"
import "../../CSS/courses.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card_Courses from "../../../molecules/student/card_courses/card_Courses";

export default function Courses(){

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
      // Función para obtener los datos de la API
        const fetchSubjects = async () => {
        try {
            const response = await fetch("/api/Cursos"); // Aquí va la URL de tu API
            const data = await response.json();
            setSubjects(data); // Asumo que 'data' es un array de materias
        } catch (error) {
            console.error("Error fetching the subjects:", error);
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
                <img src={ToolsImage} alt="Logo de herrramientas"/>
                <h3>Herramientas</h3>
            </Link>
        </>
    )
}