import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2'

export default function Ejercicio() {

    const params = useParams();

    const [ejercicio, setEjercicio] = useState([]);

    console.log(params);
    console.log(params.idLeccion);
    console.log(params.cursoID);
    console.log(params.tipo);

    // Estado para almacenar la respuesta seleccionada de cada enunciado
    const [respuestas, setRespuestas] = useState({});
    const [resultados, setResultados] = useState({});
    // Estado para mostrar si acertó o no

    const showAlert = async (data)=>{
       const result= await Swal.fire({
            title:`Puntuacion de lección :<p style="color: green;"><b > ${data.Puntuación}</b> </p>`,
            text:`Resultados: P1 : ${data.Respuestas[0]} 
            P2 :  ${data.Respuestas[1]} 
            P3 :  ${data.Respuestas[2]}
            P4 :  ${data.Respuestas[3]}
            P5 :  ${data.Respuestas[4]}`,
            icon:'info',
            background:'#811642',
            color:'#f2ffeb',
            showCancelButton: true,
            confirmButtonColor: '#3085d6', 
            cancelButtonColor: '#d33', 
            confirmButtonText: '<b >Aceptar</b> ',
            cancelButtonText: 'Cancelar',
            footer:'Al aceptar guardaras tu progreso',
            didOpen: (popup) => {
                // Aplicar estilos directamente al popup
                popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                popup.style.borderRadius = '15px';       // Bordes redondeados
              },
        })
        if (result.isConfirmed){
            try{
            const response = await fetch('/api/Predpy')
            }catch{

            }
        }
    }

    // Maneja el cambio de selección para cada enunciado
    const handleOptionChange = (enunciadoId, opcion) => {
        setRespuestas({
            ...respuestas,
            [enunciadoId]: opcion
        });
    };

    // Maneja el envío de todas las respuestas
    const handleSubmit = async () => {
        // Compara las respuestas del usuario con las correctas
        const nuevosResultados = {};
        ejercicio.forEach(enunciado => {
            if (respuestas[enunciado.id] === enunciado.respuestaCorrecta) {
                nuevosResultados[enunciado.id] = "Acertó";
            } else {
                nuevosResultados[enunciado.id] = "Falló";
            }
        });
        setResultados(nuevosResultados);
      
        // Envía las respuestas a la API
        try {
           const data ={
                idLeccion:params.idLeccion,
                Respuestas:respuestas
            }
            console.log("Respuestas enviadas:", data);
            const response = await axios.post('/api/Result', data);
            showAlert(response.data)
            console.log("Respuestas Recibidas:", response.data);
        } catch (error) {
            console.error("Error al enviar respuestas:", error);
        }

    };


    useEffect(() => {
        // Función para obtener los datos de la API
        const fetchEjercicio = async () => {
            try {
                const response = await fetch(`/api/ContentLC/${params.idLeccion}/${params.cursoID}/${params.tipo}`);
                const data = await response.json();
                setEjercicio(data);
            } catch (error) {
                console.error("Error fetching the ejercicio:", error);
            }
        };

        fetchEjercicio();
    }, [params.idLeccion, params.cursoID, params.tipo]); // El array vacío [] asegura que solo se ejecute una vez cuando el componente se monta

    console.log(ejercicio);
    // console.log(ejercicio[0].Titulo);
    // console.log(ejercicio[0].Tipo);
    // console.log(ejercicio[0].Contenido);


    return (
        <>
            {ejercicio.map((clase, index) => (
                <div key={index}>
                    <h1 className="Titulo_Leccion">{clase.Titulo} </h1>
                    {clase.Contenido.map((problema, index) => (
                        <div key={index} className="listado_contenido_tema">
                            <p className="Enunciado_Ejercicio">
                                {problema.Enunciado}
                            </p>
                            <div className="input-container">
                                <input value={problema.R_Truco} type="radio"
                                    name={`enunciado-${problema.Enunciado}`} // Agrupa las opciones de cada enunciado
                                    checked={respuestas[problema.Enunciado] === problema.R_Truco}
                                    onChange={() => handleOptionChange(problema.Enunciado, problema.R_Truco)}/>
                                <label>{problema.R_Truco}</label>
                                
                                {problema.R_Falsas.map((respuestaIncorrecta, index) => (
                                    <div key={index} >
                                        <input value={respuestaIncorrecta}
                                            type="radio"
                                            name={`enunciado-${problema.Enunciado}`} // Agrupa las opciones de cada enunciado
                                            checked={respuestas[problema.Enunciado] === respuestaIncorrecta}
                                            onChange={() => handleOptionChange(problema.Enunciado, respuestaIncorrecta)}/>
                                        <label>{respuestaIncorrecta}</label>
                                    </div>
                                ))}

                                <input value={problema.R_Correcta}
                                    type="radio"
                                    name={`enunciado-${problema.Enunciado}`} // Agrupa las opciones de cada enunciado
                                    checked={respuestas[problema.Enunciado] === problema.R_Correcta}
                                    onChange={() => handleOptionChange(problema.Enunciado, problema.R_Correcta)} />
                                <label>{problema.R_Correcta}</label>
                                    {/* Muestra si acertó o falló */}
                            </div>
                            {resultados[problema.Enunciado] && (
                                <p>{resultados[problema.Enunciado]}</p>
                            )}
                        </div>
                    ))}
                </div>
            ))}
            <button onClick={handleSubmit}>Enviar ejercicio</button>
        </>
    )
}