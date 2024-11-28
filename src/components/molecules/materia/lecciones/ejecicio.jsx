import { useParams,useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import Swal from 'sweetalert2'
import { UserContext } from '../../../../UserContext';
export default function Ejercicio() {

    const params = useParams();
    const { user, iduser } = useContext(UserContext);
    const [ejercicio, setEjercicio] = useState([]);
    // Estado para almacenar la respuesta seleccionada de cada enunciado
    const [respuestas, setRespuestas] = useState({});
    const [resultados, setResultados] = useState({});
    const navigate = useNavigate();
    // Estado para mostrar si acertó o no
    let progreso={
        "Puntaje":"",
        "Rendimiento":""
    }
    const actionCancel= async() => {
        Swal.fire({
            title: 'Finalizando...',
            text: 'Por favor espera.',
            background: '#811642',
            color: '#f2ffeb',
            timer:2000,
            allowOutsideClick: false, // Evita que se cierre al hacer clic fuera
            timerProgressBar: true,
            didOpen: (popup) => {
                Swal.showLoading();
                popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                popup.style.borderRadius = '15px';  // Mostrar indicador de carga
            },
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                navigate(-1)
            }
        })
    }
    const showAlert = async (data) => {
        progreso.Puntaje=data.Puntuación
        const result = await Swal.fire({
            title: `Puntuación de lección: <p style="color: green; font-size: 30px; text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;"><b > ${data.Puntuación}</b> </p>`,
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
            allowOutsideClick: false,
            footer: 'Al aceptar, guardarás tu progreso.',
            didOpen: (popup) => {
                // Aplicar estilos directamente al popup
                popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                popup.style.borderRadius = '15px';       // Bordes redondeados
            },
        })
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Enviando datos...',
                text: 'Por favor, espera mientras se procesa tu solicitud.',
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
                        "user": iduser,
                        "idLeccion":params.idLeccion,
                        "idMateria":params.cursoID,
                        "inputData": [data.Puntuación, data.Respuestas[0], 1, data.Respuestas[3], 1, data.Respuestas[4]],
                    })
                });
                const respons = await fetch(`/api/LecFinished/${iduser}/${params.idLeccion}/${params.cursoID}`);
                const res1 = await response.json()
                const res2 = await respons.json()
                progreso.Rendimiento=res1.maxIndex
                if(res1.maxIndex==1 && res2.status!="Existe"){
                    const result = await  Swal.fire({
                        title:"FELICIDADES!!! ",
                        html:`Detectamos que, mediante tus respuestas, tienes un rendimiento de: <p style="color: green; font-size: 30px; text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;"><b > ${res1.prediccion}</b> </p> ¿Te gustaría apoyar a otros usuarios en este tema volviéndote un tutor? `,
                        background:'#811642',
                        color:'#f2ffeb',
                        allowOutsideClick: false,
                        didOpen: (popup) => {
                            popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                            popup.style.borderRadius = '15px';  // Mostrar indicador de carga
                        },
                        confirmButtonColor: '#f2ffeb',
                        confirmButtonText: '<b style="color: black;" >Si</b> ',
                        cancelButtonColor: '#d33',
                        cancelButtonText: 'No',
                        showCancelButton: true,
                        footer: 'Al aceptar, es posible que necesitemos que ingreses tu número celular o de contacto.',
                    })
                    if (result.isConfirmed){
                        try {
                            const response = await fetch('/api/serTutor', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    "idUser": iduser,
                                    "Tipo": 2,
                                })
                            });
                            const res = await response.json()
                            console.log(res.Telefono)
                            if(res.Telefono=="Sin telefono"){
                                Swal.fire({
                                    title:"Contacto ",
                                    text:"Ingrese su número de teléfono para poder ser contactado por otros usuarios:",
                                    input:"text",
                                    inputLabel: 'Teléfono',
                                    inputPlaceholder: 'Ejemplo: 1234567890',
                                    background:'#811642',
                                    color:'#f2ffeb',
                                    allowOutsideClick: false,
                                    didOpen: (popup) => {
                                        popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                                        popup.style.borderRadius = '15px';  // Mostrar indicador de carga
                                    },
                                    confirmButtonColor: '#f2ffeb',
                                    confirmButtonText: '<b style="color: black;" >Si</b> ',
                                    inputValidator: (value) => {
                                                if (!value) {
                                                    return 'Debe ingresar un número de teléfono';
                                                }
                                                // Validar formato de número de teléfono (solo dígitos, entre 10 y 15 caracteres)
                                                const phoneRegex = /^[0-9]{10,15}$/; // Solo números, entre 10 y 15 dígitos
                                                if (!phoneRegex.test(value)) {
                                                    return 'Debe ingresar un número de teléfono válido (10-15 dígitos)';
                                                }
                                                return null;
                                            }
                                }).then((result) => {
                                    let Telefono =""
                                    if (result.isConfirmed) {
                                        Telefono =result.value
                                        console.log('Número de teléfono ingresado:', result.value);
                                         Swal.fire({
                                            title:"¡Número válido! ",
                                            text:`Gracias por registrarte como tutor con el número: ${result.value}`,
                                            background:'#811642',
                                            color:'#f2ffeb',
                                            allowOutsideClick: false,
                                            didOpen: (popup) => {
                                                popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                                                popup.style.borderRadius = '15px';  // Mostrar indicador de carga
                                            },
                                            confirmButtonColor: '#f2ffeb',
                                            confirmButtonText: '<b style="color: black;" >Si</b> ',
                                        }).then(async (result)=>{
                                            if (result.isConfirmed){
                                                try {
                                                    const response = await fetch('/api/setTelefono', {
                                                        method: 'POST',
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        },
                                                        body: JSON.stringify({
                                                            "idUser": iduser,
                                                            "Telefono":Telefono,
                                                        })
                                                    });
                                                    const res = await response.json()
                                                    endAlert()
                                                }catch(error){
                                                    console.log(error);
                                                    
                                                }

                                            } 
                                        })
                                    }
                                })
                            }else{
                                endAlert()
                            }
                        }catch(error){
                            console.log("Error: ", error);
                        }

                    }else{
                        endAlert()
                    }
                
                }else if(res2.status=="Existe"){
                    Swal.fire({
                        title: `La lección ya fue resuelta previamente.`,
                        text: ``,
                        icon: 'error',
                        background: '#811642',
                        color: '#f2ffeb',
                        //showCancelButton: true,
                        confirmButtonColor: '#f2ffeb',
                        cancelButtonColor: '#d33',
                        confirmButtonText: '<b style="color: black;" >Aceptar</b> ',
                        cancelButtonText: 'Cancelar',
                        allowOutsideClick: false,
                        didOpen: (popup) => {
                            // Aplicar estilos directamente al popup
                            popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                            popup.style.borderRadius = '15px';       // Bordes redondeados
                        },
                    }).then(async (result) => {
                        if(result.isConfirmed) navigate(-1);
                    })
                }else{
                    Swal.fire({
                        title:"Resultado ",
                        html:`Detectamos que  mediante tus respuestas tienes un rendimiento de: <p style="color: green; font-size: 30px; text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;"><b > ${res1.prediccion}</b> </p> ¿Quieres que se te asigne un tutor? `,
                        background:'#811642',
                        color:'#f2ffeb',
                        allowOutsideClick: false,
                        didOpen: (popup) => {
                            popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                            popup.style.borderRadius = '15px';  // Mostrar indicador de carga
                        },
                        confirmButtonColor: '#f2ffeb',
                        confirmButtonText: '<b style="color: black;" >Si</b> ',
                        cancelButtonColor: '#d33',
                        cancelButtonText: 'No',
                        showCancelButton: true,
                        footer: 'Si aceptas, se te asignará un tutor y se dará por terminada la lección; caso contrario, únicamente se dará por terminada la lección.',
                    }).then(async (result) => {
                        if(result.isDismissed){
                            endAlert()
                        }
                        if(result.isConfirmed){
                            Swal.fire({
                                title: 'Emparejando...',
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
                                const responses = await fetch('/api/insertProgress', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        "idUser": iduser,
                                        "idLeccion": params.idLeccion,
                                        "idMateria":params.cursoID,
                                        "Leccion_Tipo":1,
                                        "Completado":1,
                                        "Puntaje":progreso.Puntaje,
                                        "Rendimiento":progreso.Rendimiento
                                    })
                                });
                                const respo = await responses.json()
                                console.log(iduser)
                                console.log(progreso.Rendimiento)
                                console.log(params.idLeccion)
                                console.log(params.idMateria)
                                const response = await fetch(`/api/Pair/${iduser}/${progreso.Rendimiento}/${params.idLeccion}/${params.cursoID}`);
                                const res = await response.json()
                                if(respo.status=="Datos insertados correctamente" ){
                                    if(res.status=="Ya tiene un tutor asignado"){
                                        Swal.fire({
                                            title:"Ya tienes un tutor asignado. ",
                                            html:"¿Deseas reemplazar el tutor que tienes actualmente?",
                                            background:'#811642',
                                            color:'#f2ffeb',
                                            icon:"info",
                                            allowOutsideClick: false,
                                            didOpen: (popup) => {
                                                popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                                                popup.style.borderRadius = '15px';  // Mostrar indicador de carga
                                            },
                                            confirmButtonColor: '#f2ffeb',
                                            confirmButtonText: '<b style="color: black;">Si</b> ',
                                            cancelButtonColor: '#d33',
                                            cancelButtonText: 'Rechazar',
                                            showCancelButton: true,
                                            footer:"Al rechazar, terminará con la lección.",
                                        }).then(async (result) => {
                                            if(result.isConfirmed){
                                                try {
                                                    const response = await fetch(`/api/Pair/${iduser}`);
                                                    const res = await response.json()
                                                    if(res.status=="Exito"){
                                                        Swal.fire({
                                                            title: 'Emparejando...',
                                                            text: 'Por favor, espera mientras se procesa tu solicitud.',
                                                            background: '#811642',
                                                            color: '#f2ffeb',
                                                            allowOutsideClick: false, // Evita que se cierre al hacer clic fuera
                                                            didOpen: (popup) => {
                                                                Swal.showLoading();
                                                                popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                                                                popup.style.borderRadius = '15px';  // Mostrar indicador de carga
                                                            },
                                                        });
                                                        const response = await fetch(`/api/Pair/${iduser}/${progreso.Rendimiento}/${params.idLeccion}/${params.cursoID}`);
                                                        const res = await response.json()
                                                        emparejarAlerta(res)
                                                    }
                                                }catch(error){
                                                    console.log(error);
                                                    
                                                }
                                            }
                                            if(result.isDismissed){
                                                actionCancel()
                                            }
                                        })
                                    }else if (res.status=="No hay tutor disponible" ){
                                        Swal.fire({
                                            title: 'No es posible emparejarte con un tutor en este momento.',
                                            text: 'Recomendamos que regreses más tarde a realizar la lección si es que deseas un tutor.',
                                            background: '#811642',
                                            color: '#f2ffeb',
                                            cancelButtonText: 'Terminar',
                                            showCancelButton: true,
                                            confirmButtonColor: '#f2ffeb',
                                            confirmButtonText: '<b style="color: black;" >Regresar</b> ',
                                            allowOutsideClick: false, // Evita que se cierre al hacer clic fuera
                                            footer: 'Si decides terminar, no podrás tener un tutor, por lo que se dará por concluida la lección.',
                                            didOpen: (popup) => {
                                                popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                                                popup.style.borderRadius = '15px';  // Mostrar indicador de carga
                                            },
                                        }).then(async (result) =>{
                                            if (result.isDismissed){
                                                endAlert()
                                            }
                                        })
                                    }else if (res.status=="Emparejado"){
                                        emparejarAlerta(res)
                                    }
                                }else{

                                    Swal.fire({
                                        title: 'No es posible emparejarte con un tutor en este momento',
                                        text: 'Recomendamos que regreses más tarde a realizar la lección si es que deseas un tutor.',
                                        background: '#811642',
                                        color: '#f2ffeb',
                                        cancelButtonText: 'Terminar',
                                        showCancelButton: true,
                                        confirmButtonColor: '#f2ffeb',
                                        confirmButtonText: '<b style="color: black;" >Regresar</b> ',
                                        allowOutsideClick: false, // Evita que se cierre al hacer clic fuera
                                        footer: 'Si decides terminar no podras tener un tutor por lo que se dara por concluida la lección',
                                        didOpen: (popup) => {
                                            popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                                            popup.style.borderRadius = '15px';  // Mostrar indicador de carga
                                        },
                                    }).then(async (result) =>{
                                        if (result.isDismissed){
                                            endAlert()
                                        }
                                    })
                                }
                            }catch(error){
                                console.log(error)
                            }    

                        }
                    })
                }
            }catch(error){
                console.log("Error: ", error);
                
            }
        }
    }
    const emparejarAlerta= async (data)=> {
                        console.log(data)
                                let idtutor=data.item.idUsuario
                                        Swal.fire({
                                            title:"El tutor que se te asignó es: ",
                                            html:`${data.item.NombreUsuario}`,
                                            text:"Si estás de acuerdo, da clic en Aceptar.",
                                            background:'#811642',
                                            color:'#f2ffeb',
                                            icon:"info",
                                            allowOutsideClick: false,
                                            didOpen: (popup) => {
                                                popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                                                popup.style.borderRadius = '15px';  // Mostrar indicador de carga
                                                // Cambiar el estilo del botón "Deny"
                                                const denyButton = document.querySelector('.swal2-deny');
                                                if (denyButton) {
                                                    denyButton.style.backgroundColor = '#f2ffeb'; // Color del fondo
                                                    denyButton.style.color = '#000'; // Color del texto
                                                }
                                            },
                                            confirmButtonColor: '#f2ffeb',
                                            confirmButtonText: '<b style="color: black;">Aceptar</b> ',
                                            showDenyButton: true,
                                            denyButtonText: 'Cambiar de tutor',
                                            cancelButtonColor: '#d33',
                                            cancelButtonText: 'Rechazar',
                                            showCancelButton: true,
                                            footer:"Al aceptar, guardarás los datos del tutor, los cuales podrás revisar en el perfil. Rechazar terminará con el proceso.",
                                            preDeny: async () => {
                                                try{
                                                    const response = await fetch(`/api/Pair/${iduser}/${progreso.Rendimiento}/${params.idLeccion}/${params.cursoID}`);
                                                    const res = await response.json()
                                                    idtutor=res.item.idUsuario
                                                    Swal.update({
                                                        html: `<p>El tutor ha sido cambiado a: ${res.item.NombreUsuario}</p>`,
                                                    });
                                                }catch(error){
                                                    console.log(error);
                                                    
                                                }
                                                return false
                                            }
                                        }).then(async (result) => {
                                            if(result.isConfirmed){
                                                try{
                                                    console.log(idtutor)
                                                    const response = await fetch(`/api/Pair/${iduser}/${idtutor}`);
                                                    const res = await response.json()
                                                    if(res.status=="Emparejamiento exitoso"){
                                                        Swal.fire({
                                                            title: `Datos Guardados`,
                                                            text: `Datos guardados correctamente.`,
                                                            icon: 'success',
                                                            background: '#811642',
                                                            color: '#f2ffeb',
                                                           // showCancelButton: true,
                                                            confirmButtonColor: '#f2ffeb',
                                                            cancelButtonColor: '#d33',
                                                            confirmButtonText: '<b style="color: black;" >Aceptar</b> ',
                                                            cancelButtonText: 'Cancelar',
                                                            allowOutsideClick: false,
                                                            didOpen: (popup) => {
                                                                // Aplicar estilos directamente al popup
                                                                popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                                                                popup.style.borderRadius = '15px';       // Bordes redondeados
                                                            },
                                                        }).then(async (result) => {
                                                            if(result.isConfirmed) navigate(-1);
                                                            
                                                        })
                                                    }
                                                }catch(error){
                                                    console.log(error)
                                                }
                                            }
                                            if(result.isDismissed){
                                                actionCancel()
                                            }
                                        })
    }

    const endAlert = async (save)=>{
        Swal.fire({
            title: `Terminaste la lección :D.`,
            text: `Has terminado la lección, por lo que tus datos se guardarán.`,
            icon: 'success',
            background: '#811642',
            color: '#f2ffeb',
            //showCancelButton: true,
            confirmButtonColor: '#f2ffeb',
            cancelButtonColor: '#d33',
            confirmButtonText: '<b style="color: black;" >Aceptar</b> ',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false,
            footer: 'Al aceptar, guardarás tu progreso.',
            didOpen: (popup) => {
                // Aplicar estilos directamente al popup
                popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                popup.style.borderRadius = '15px';       // Bordes redondeados
            },
        }).then(async (result) => {
            if(result.isConfirmed){
                try {
                    const response = await fetch('/api/insertProgress', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "idUser": iduser,
                            "idLeccion": params.idLeccion,
                            "idMateria":params.cursoID,
                            "Leccion_Tipo":1,
                            "Completado":1,
                            "Puntaje":progreso.Puntaje,
                            "Rendimiento":progreso.Rendimiento
                        })
                    });
                    const res = await response.json()
                    if(res.status=="Datos insertados correctamente"){
                        Swal.fire({
                            title: `Progreso guardado`,
                            text: `Datos guardados`,
                            icon: 'info',
                            background: '#811642',
                            color: '#f2ffeb',
                           // showCancelButton: true,
                            confirmButtonColor: '#f2ffeb',
                            cancelButtonColor: '#d33',
                            confirmButtonText: '<b style="color: black;" >Aceptar</b> ',
                            cancelButtonText: 'Cancelar',
                            allowOutsideClick: false,
                            didOpen: (popup) => {
                                // Aplicar estilos directamente al popup
                                popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                                popup.style.borderRadius = '15px';       // Bordes redondeados
                            },
                        }).then(async (result) => {
                            if(result.isConfirmed) navigate(-1);
                            
                        })
                    }else{
                        Swal.fire({
                            title: `La lección ya fue resuelta previamente.`,
                            text: ``,
                            icon: 'error',
                            background: '#811642',
                            color: '#f2ffeb',
                            //showCancelButton: true,
                            confirmButtonColor: '#f2ffeb',
                            cancelButtonColor: '#d33',
                            confirmButtonText: '<b style="color: black;" >Aceptar</b> ',
                            cancelButtonText: 'Cancelar',
                            allowOutsideClick: false,
                            didOpen: (popup) => {
                                // Aplicar estilos directamente al popup
                                popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                                popup.style.borderRadius = '15px';       // Bordes redondeados
                            },
                        }).then(async (result) => {
                            
                            if(result.isConfirmed) navigate(-1);
                                
                        })
                    }
                }catch(error){
                    console.log(error);
                    
                }
            }else{
                navigate(-1);
            }
        })
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
                text: 'Por favor, responde todas las preguntas antes de enviar.',
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
            <div className="div_btn_sub"><button className="btn_submit_ex" onClick={handleSubmit} >Enviar ejercicio</button></div>
        </>
    )
}