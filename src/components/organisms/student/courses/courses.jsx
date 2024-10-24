import Card from "../../../molecules/student/card_courses/card";
import ToolsImage from "../../../../assets/ToolsImage.png"
import "../../CSS/courses.css"
import { useEffect, useState } from "react";

export default function Courses(){

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
      // Función para obtener los datos de la API
        const fetchSubjects = async () => {
        try {
            const response = await fetch("api/Login"); // Aquí va la URL de tu API
            const data = await response.json();
          setSubjects(data); // Asumo que 'data' es un array de materias
        } catch (error) {
            console.error("Error fetching the subjects:", error);
        }
        };

        fetchSubjects();
    }, []); // El array vacío [] asegura que solo se ejecute una vez cuando el componente se monta

    const materias = [{name: "Statistical tools for data mining"}, {name: "Introduction to Cryptography"}, {name: "otro curso random"}]

    return(
        <> 
            <div className="Course_Container">
            {materias.map((subject, index) => (
                <Card key={index} courseName={subject.name}/>
            ))}
            </div>
            <div className="Tools_container">
                <img src={ToolsImage} alt="Logo de herrramientas"/>
                <h3>Herramientas</h3>
            </div>
        </>
    )
}