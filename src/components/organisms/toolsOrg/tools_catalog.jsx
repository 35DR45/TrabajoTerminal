import ToolsLogo from "../../../assets/ToolsLogoEucalyp.png"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tool_Card from "../../molecules/toolsMol/tool_card";
import "../CSS/tools_catalog.css"

export default function Tools_Catalog(){

    // const params = useParams();

    // console.log("Redirigirá a ", params.cursoID);

    // const [herramientas, setHerramientas] = useState([]);

    // useEffect(() => {
    //   // Función para obtener los datos de la API
    //     const fetchHerramientas = async () => {
    //     try {
    //         const response = await fetch(`/api/SeeLC/${params.cursoID}`); // Aquí va la URL de tu API
    //         const data = await response.json();
    //         setHerramientas(data); // Asumo que 'data' es un array de materias
    //     } catch (error) {
    //         console.error("Error fetching the herramientas:", error);
    //     }
    //     };

    //     fetchHerramientas();
    // }, [params.cursoID]); // El array vacío [] asegura que solo se ejecute una vez cuando el componente se monta

    const materias = [{NombreMateria: "Calculadora Cesar", id: "1"}, {NombreMateria: "Calculadora de tendencias centrales", id: "2"}, {NombreMateria: "Calculadora General", id: "3"}, {NombreMateria: "Calculadora Álgebra modular", id: "4"},{NombreMateria: "Calculadora Vigenere", id: "5"}]

    console.log(materias);

    return(
        <> 
            <div className="Tools_Container">
                    {materias.map((materia, indice) => (
                        <Tool_Card key={indice} toolName={materia.NombreMateria} id={materia.id} />
                    ))}
            </div>
        </>
    )
}