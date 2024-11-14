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
    
    console.log(temario);
    

    return(
        <div className="listado_materias">
            <ul>
            {temario.map((elemento, index) => {
                let Element;
                
                // Determina el tipo de ID y asigna el estilo adecuado
                if (elemento.idLeccion % 1000 === 0) {
                    // Capítulo - estilo h2
                    Element = 'ul';
                } else if (elemento.idLeccion % 100 === 0) {
                    // Tema - estilo h3
                    Element = 'ul';
                } else if (elemento.idLeccion % 10 === 0) {
                    // Sección - estilo p
                    Element = 'li';
                } else {
                    // Sub-sección o cualquier otro caso, se puede definir un estilo por defecto aquí
                    Element = 'span'; 
                }

                return (
                    <div key={index}>
                        <li>
                            <Element><Tema tituloTema={elemento.Titulo} /></Element>
                        </li>
                    </div>
                );
            })}
                
            </ul> 
        </div>
    )
}