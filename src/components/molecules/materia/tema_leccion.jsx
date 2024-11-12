import { useParams } from "react-router-dom";
// import Leccion from "../../atoms/materia/leccion";
import Tema from "../../atoms/materia/tema";
import "../../organisms/CSS/materia.css"
import { useEffect, useState } from "react";

export default function Tema_Leccion(){

    const params = useParams();

    const [temario, setTemario] = useState([]);

    useEffect(() => {
        // Función para obtener los datos de la API
        const fetchTemario = async () => {
        try {
            const response = await fetch(`/api/SeeLC/${params.cursoID}`); 
            const data = await response.json();
            setTemario(data); 
        } catch (error) {
            console.error("Error fetching the temario:", error);
        }
        };

        fetchTemario();
    }, [params.cursoID]); // El array vacío [] asegura que solo se ejecute una vez cuando el componente se monta
    
    // const listaTemas = [{Titulo: "Tema1", Subtitulos: ["Subtema1", "Subtema2", "Subtema3"]}, {Titulo: "Tema2", Subtitulos: ["Subtema10", "Subtema20", "Subtema35"]}];
    
    // <ul>
    //             {temario.map((seccion, index) => (
    //                 <div key= {index}>
    //                     <li ><Tema tituloTema={seccion.Titulo} /></li>
    //                         <ul>
    //                             {seccion.Subtitulos.map((Subtitulo, index)=> (
    //                                 <li  key= {index}> <Leccion tituloLeccion={Subtitulo}/> </li>
                                
    //                             ))}
    //                         </ul>
    //                 </div>
    //             ))}
                
    //         </ul> 

    return(
        <div className="listado_materias">
            <ul>
                {temario.map((seccion, index) => (
                    <div key= {index}>
                        <li ><Tema tituloTema={seccion.Titulo} /></li>
                    </div>
                ))}
                
            </ul> 
        </div>
    )
}