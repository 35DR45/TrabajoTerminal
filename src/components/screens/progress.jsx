import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";
import { useEffect, useState } from "react";
import "./CSS/progress.css"
import { Link } from "react-router-dom";
import Progress_Card from "../organisms/progress/progress_card";
import Profile_Button from "../atoms/perfil/profile_button";

export default function Progress(){

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
            <Header/>
            <h2 className="Courses_Section">Tu progreso</h2>
            <div className="Course_Container">
            {subjects.map((subject, index) => (
                <div key={index}>
                    <p className="subject_name">{subject.NombreMateria}</p>
                    <Progress_Card />
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