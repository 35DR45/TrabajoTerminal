import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Leccion(){

    const params = useParams();

    const [leccion, setLeccion] = useState([]);

    useEffect(() => {
        // Función para obtener los datos de la API
        const fetchLeccion = async () => {
        try {
            const response = await fetch(`/api/ContentLC/${params.idLeccion}/${params.cursoID}/${params.tipo}`); 
            const data = await response.json();
            setLeccion(data); 
        } catch (error) {
            console.error("Error fetching the leccion:", error);
        }
        };

        fetchLeccion();
    }, [params.idLeccion, params.cursoID, params.tipo]); // El array vacío [] asegura que solo se ejecute una vez cuando el componente se monta
    
    console.log(leccion);
    // console.log(leccion[0].Titulo);
    // console.log(leccion[0].Tipo);
    // console.log(leccion[0].Contenido);
    
    return(
        <>
            {leccion.map((clase, index) => (
                <div  key={index}>
                    <h1 className="Titulo_Leccion">{clase.Titulo} </h1>
                    <div className="listado_contenido_tema">
                        <p>
                            {clase.Contenido.contenido.map((parrafo, index) =>(
                                <div key={index} dangerouslySetInnerHTML={{__html: parrafo}}></div>
                            ))}
                        </p>
                    </div>
                </div>
            ))}
        </>
    )
}