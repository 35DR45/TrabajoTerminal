import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import Swal from 'sweetalert2'
import { UserContext } from '../../../../UserContext';
export default function Ejercicio() {

    const params = useParams();
    const { user } = useContext(UserContext);
    const [ejercicio, setEjercicio] = useState([]);

    // Estado para almacenar la respuesta seleccionada de cada enunciado
    const [respuestas, setRespuestas] = useState({});
    const [resultados, setResultados] = useState({});
    // Estado para mostrar si acertó o no

    const showAlert = async (data) => {
        const result = await Swal.fire({
            title: `Puntuacion de lección :<p style="color: green;"><b > ${data.Puntuación}</b> </p>`,
            text: `Resultados: P1 : ${data.Respuestas[0]} 
            P2 :  ${data.Respuestas[1]} 
            P3 :  ${data.Respuestas[2]}
            P4 :  ${data.Respuestas[3]}
            P5 :  ${data.Respuestas[4]}`,
            icon: 'info',
            background: '#811642',
            color: '#f2ffeb',
            showCancelButton: true,
            confirmButtonColor: '#f2ffeb',
            cancelButtonColor: '#d33',
            confirmButtonText: '<b style="color: black;" >Aceptar</b> ',
            cancelButtonText: 'Cancelar',
            footer: 'Al aceptar guardaras tu progreso',
            didOpen: (popup) => {
                // Aplicar estilos directamente al popup
                popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                popup.style.borderRadius = '15px';       // Bordes redondeados
            },
        })
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Enviando datos...',
                text: 'Por favor espera mientras se procesa tu solicitud.',
                background: '#811642',
                color: '#f2ffeb',
                allowOutsideClick: false, // Evita que se cierre al hacer clic fuera
                didOpen: (popup) => {
                    Swal.showLoading();
                    popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                    popup.style.borderRadius = '15px';  // Mostrar indicador de carga
                },
            });
            try {
                const response = await fetch('/api/Predpy', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "user": user,
                        "inputData": [data.Puntuación, data.Respuestas[0], 1, data.Respuestas[3], 1, data.Respuestas[4]],
                    })
                });
                const res = await response.json()

            Swal.fire({
                title:'SE ENVIO',
                background:'#811642',
                color:'#f2ffeb',
                didOpen: (popup) => {
                    popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                    popup.style.borderRadius = '15px';  // Mostrar indicador de carga
                },
                confirmButtonColor: '#f2ffeb',
                confirmButtonText: '<b style="color: black;" >Aceptar</b> ',
                 
            })
            }catch(error){
                console.log("Error: ", error);
                
            }
        }
    }

    // Maneja el cambio de selección para cada enunciado
    const handleOptionChange = (enunciadoId = "default", opcion = "default") => {
        setRespuestas({
            ...respuestas,
            [enunciadoId]: opcion
        });        
    };

    // Maneja el envío de todas las respuestas
    const handleSubmit = async (event) => {

        event.preventDefault();
        // Compara las respuestas del usuario con las correctas
        const preguntasSinResponder = ejercicio.flatMap(clase => clase.Contenido).filter(problema => respuestas[problema.Enunciado].trim() === "Sin responder");

        console.log("Ejercicios sin respuesta: ", preguntasSinResponder);
        console.log("Supuestas respuestas", respuestas);
        
        if (preguntasSinResponder.length > 0) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor responde todas las preguntas antes de enviar.',
                icon: 'error',
                background: '#811642',
                color: '#f2ffeb',
                didOpen: (popup) => {
                    popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                    popup.style.borderRadius = '15px';  // Mostrar indicador de carga
                },
                confirmButtonColor: '#f2ffeb',
                confirmButtonText: '<b style="color: black;">Aceptar</b>',
            });
            return; // Salir de la función si faltan respuestas
        }


        const nuevosResultados = {};
        ejercicio.forEach(enunciado => {
            if (respuestas[enunciado.id] === enunciado.respuestaCorrecta) {
                nuevosResultados[enunciado.id] = "Acertó";
            } else {
                nuevosResultados[enunciado.id] = "Falló";
            }
        });
        setResultados(nuevosResultados);
        console.log("Nuevos resultados ? ",nuevosResultados);
        

        // Envía las respuestas a la API
        try {
           const data ={
                idLeccion:params.idLeccion,
                Materia:params.cursoID,
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

    useEffect(() => {
        const initialState = {};
        ejercicio.forEach(clase => {
            clase.Contenido.forEach(problema => {
                initialState[problema.Enunciado] = "Sin responder"; // Valor por defecto
            });
        });
        setRespuestas(initialState);
    }, [ejercicio]);
    
    console.log(ejercicio);


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
                            <div className="input_container">
                                <div className="respuesta_ejercicio">
                                    <input value={problema.R_Truco} type="radio"
                                        id={`enunciado-${problema.Enunciado}-3`} // Agrupa las opciones de cada enunciado
                                        name={`enunciado-${problema.Enunciado}`} // Agrupa las opciones de cada enunciado
                                        checked={respuestas[problema.Enunciado] === problema.R_Truco}
                                        onChange={() => handleOptionChange(problema.Enunciado, problema.R_Truco)} />
                                    <label htmlFor={`enunciado-${problema.Enunciado}-3`}>{problema.R_Truco}</label>
                                </div>

                                {problema.R_Falsas.map((respuestaIncorrecta, index) => (
                                    <div key={index} className="respuesta_ejercicio" >
                                        <input value={respuestaIncorrecta}
                                            type="radio"
                                            id={`enunciado-${problema.Enunciado}-${index}`} // Agrupa las opciones de cada enunciado
                                            name={`enunciado-${problema.Enunciado}`} // Agrupa las opciones de cada enunciado
                                            checked={respuestas[problema.Enunciado] === respuestaIncorrecta}
                                            onChange={() => handleOptionChange(problema.Enunciado, respuestaIncorrecta)} />
                                        <label htmlFor={`enunciado-${problema.Enunciado}-${index}`}>{respuestaIncorrecta}</label>
                                    </div>
                                ))}

                                <div className="respuesta_ejercicio">
                                    <input id={`enunciado-${problema.Enunciado}-4`} value={problema.R_Correcta}
                                        type="radio"
                                        name={`enunciado-${problema.Enunciado}`} // Agrupa las opciones de cada enunciado
                                        checked={respuestas[problema.Enunciado] === problema.R_Correcta}
                                        onChange={() => handleOptionChange(problema.Enunciado, problema.R_Correcta)} />
                                    <label htmlFor={`enunciado-${problema.Enunciado}-4`} >{problema.R_Correcta}</label>
                                </div>
                                {/* Muestra si acertó o falló */}
                            </div>
                            {resultados[problema.Enunciado] && (
                                <p>{resultados[problema.Enunciado]}</p>
                            )}
                        </div>
                    ))}
                </div>
            ))}
            <button className="btn-header" onClick={handleSubmit} >Enviar ejercicio</button>
        </>
    )
}