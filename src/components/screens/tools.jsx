import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../organisms/header/header";
import Footer from "../organisms/footer/footer";
import Tool_Card from "../organisms/toolsOrg/tools_catalog";
import Tools_Catalog from "../organisms/toolsOrg/tools_catalog";


export default function Tools(){
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

    const materias = [{NombreMateria: "Calculadora Cesar", id: "1"}, {NombreMateria: "Calculadora Tendencias Centrales"}, {NombreMateria: "Calculadora General"}, {NombreMateria: "Calculadora Algebra modular"},{NombreMateria: "Calculadora Vigenere"}]

    console.log(materias);
    

    return( 
        <> 
            <Header/>
            <Tools_Catalog/>
            <Footer/>
        </>
    )
}