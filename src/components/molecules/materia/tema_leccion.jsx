import Leccion from "../../atoms/materia/leccion";
import Tema from "../../atoms/materia/tema";
import "../../organisms/CSS/materia.css"
import { useEffect, useState } from "react";


// Aquí el get de las lecciones

export default function Tema_Leccion({materiaID}){
    console.log(materiaID);

    const [temario, setTemario] = useState([]);

    useEffect(() => {
      // Función para obtener los datos de la API
        const fetchTemario = async () => {
        try {
            const response = await fetch("api/Cursos"); // Aquí va la URL de tu API
            const data = await response.json();
            setTemario(data); // Asumo que 'data' es un array de materias
        } catch (error) {
            console.error("Error fetching the temario:", error);
        }
        };

        fetchTemario();
    }, []); // El array vacío [] asegura que solo se ejecute una vez cuando el componente se monta
    
    const listaTemas = [{tema: "Tema1", subtemas: ["Subtema1", "Subtema2", "Subtema3"]}, {tema: "Tema2", subtemas: ["Subtema10", "Subtema20", "Subtema35"]}];
    
    return(
        <div className="listado_materias">
            <ul>
                {listaTemas.map((seccion, index) => (
                    <div key= {index}>
                        <li ><Tema tituloTema={seccion.tema} /></li>
                            <ul>
                                {seccion.subtemas.map((nombre, index)=> (
                                    <li  key= {index}> <Leccion tituloLeccion={nombre}/> </li>
                                
                                ))}
                            </ul>
                    </div>
                ))}
                
            </ul> 
        </div>
    )
}