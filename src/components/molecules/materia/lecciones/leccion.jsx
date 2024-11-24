import { useParams ,useNavigate} from "react-router-dom";
import { useEffect, useState,useContext } from "react";
import { UserContext } from '../../../../UserContext';
export default function Leccion(){

    const params = useParams();
    const {iduser } = useContext(UserContext);

    const [leccion, setLeccion] = useState([]);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await fetch('/api/insertProgress', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "idUser": iduser,
                    "idLeccion": params.idLeccion,
                    "idMateria":params.cursoID,
                    "Leccion_Tipo":params.tipo,
                    "Completado":1,
                    "Puntaje":null,
                    "Rendimiento":null
                })
            });
            const respo = await response.json()
            if(respo.error=="No se insertaron los datos o ya existian") navigate(-1)
            else navigate(-1)
                
            
       }catch(error){
        console.log(error)
       }
    }
    
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
                            {clase.Contenido.contenido.map((parrafo, index) =>(
                                <div key={index} dangerouslySetInnerHTML={{__html: parrafo}}></div>
                            ))}
                    </div>
                    
                </div>
                
            ))}
            <div className="div_btn_sub"><button  className="btn_submit_ex" onClick={handleSubmit} >Terminar</button></div>
        </>
    )
}