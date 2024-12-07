import Pass from "../../../molecules/login/pass";
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Btn_Register from "../../../atoms/header/btn_Register"
import Swal from 'sweetalert2'


export default function Verified_form(){

    const [password, setPassword] = useState('');
    const [passConfError, setPassConfError] = useState('');
    const [passError, setPassError] = useState('');
    const navigate = useNavigate();
    const params = useParams();

    const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&()=/?¿¡'|°,;.\-\+]).{8,}$/;

    

    // Validar contraseña en cada cambio
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        if (!regexPass.test(value)) {
            setPassError("Error: La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial.");
        } else {
            setPassError(''); // Limpia el mensaje cuando cumple con los criterios
        }
    };

    const handlePasswordConfChange = (e) => {
        const value = e.target.value;
        if (value != password) {
            setPassConfError("Error: Las contraseñas no son idénticas.");
        } else {
            setPassConfError(''); // Limpia el mensaje cuando cumple con los criterios
        }
    }

    const servErrorAlert = async (error)=>{
        Swal.fire({
            title: 'Ocurrió un error en el servidor, regresando al inicio.',
            text: `${error}`,
            icon: 'error',
            background: '#811642',
            color: '#f2ffeb',
            timer:3000,
            allowOutsideClick: false, // Evita que se cierre al hacer clic fuera
            timerProgressBar: true,
            didOpen: (popup) => {
                Swal.showLoading();
                popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                popup.style.borderRadius = '15px';  // Mostrar indicador de carga
            },
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                navigate('/')
            }
        })
    }

    const handleSubmit = async (e) => {
        console.log("Se presionó el botón");
        
        e.preventDefault();
        
            if (passError === '' && passConfError === '' ) {
                const FormData = {
                    mail: params.Correo,
                    pass: password,
                    user: params.NombreUsuario,
                }
                try {
                    // Envía los datos del formulario al backend
                    const response = await fetch('/api/Change', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(FormData)
                    });
                    if (response.ok) {
                        const data = await response.json();
                        if (data.status == "Cambio de contraseña exitoso") {
                            // Redirige al usuario a la URL /registrado
                            Swal.fire({
                                title: "Contraseña reestablecida",
                                text: "Puede iniciar sesión con su nueva contraseña :)",
                                icon: 'success',
                                background: '#811642',
                                color: '#f2ffeb',
                                showCancelButton: false,
                                timer: 2000,
                                timerProgressBar: true,
                                footer: '¡Recuerda no compartir tus datos de acceso!',
                                didOpen: (popup) => {
                                    Swal.showLoading();
                                    // Aplicar estilos directamente al popup
                                    popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                                    popup.style.borderRadius = '15px';       // Bordes redondeados
                                },
                            }).then(() => {
                                navigate("/login");
                            })
                        } else {
                            console.log(data.status);
                            Swal.fire({
                                title: "Error en el reestablecimiento de contraseña",
                                text: "¡Reintentalo!",
                                icon: 'error',
                                background: '#811642',
                                color: '#f2ffeb',
                                showCancelButton: false,
                                timer: 2000,
                                timerProgressBar: true,
                                footer: 'Recuerda no compartir tus datos de acceso',
                                didOpen: (popup) => {
                                    Swal.showLoading();
                                    // Aplicar estilos directamente al popup
                                    popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                                    popup.style.borderRadius = '15px';       // Bordes redondeados
                                },
                            }).then(() => {
                                navigate("/forgotten");
                            })
                        }
                    } else {
                        const data = await response.json();
                        if(data.error == "Misma contra"){
                            Swal.fire({
                                title: "Esa contraseña ya fue usada",
                                text: "Utiliza una contraseña que no hayas usado anteriormente",
                                icon: 'error',
                                background: '#811642',
                                color: '#f2ffeb',
                                showCancelButton: false,
                                timer: 2000,
                                timerProgressBar: true,
                                footer: 'Recuerda no compartir tus datos de acceso',
                                didOpen: (popup) => {
                                    Swal.showLoading();
                                    // Aplicar estilos directamente al popup
                                    popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                                    popup.style.borderRadius = '15px';       // Bordes redondeados
                                },
                            })
                        }else{
                            Swal.fire({
                                title: "Error del servidor",
                                text: "¡Reintentalo!",
                                icon: 'error',
                                background: '#811642',
                                color: '#f2ffeb',
                                showCancelButton: false,
                                timer: 2000,
                                timerProgressBar: true,
                                footer: 'Recuerda no compartir tus datos de acceso',
                                didOpen: (popup) => {
                                    Swal.showLoading();
                                    // Aplicar estilos directamente al popup
                                    popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                                    popup.style.borderRadius = '15px';       // Bordes redondeados
                                },
                            }).then(() => {
                                navigate("/forgotten");
                            })
                            console.error('Error al registrar usuario');
                        }
                        
                    }
                } catch (error) {
                    servErrorAlert(error)
                    console.error('Error:', error);
                }
            } else {
                Swal.fire({
                    title: "Hay errores en tu formulario de registro",
                    text: "¡Corrige los errores y reintentalo!",
                    icon: 'error',
                    background: '#811642',
                    color: '#f2ffeb',
                    showCancelButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    footer: 'Recuerda no dejar datos del formulario vacíos',
                    didOpen: (popup) => {
                        Swal.showLoading();
                        // Aplicar estilos directamente al popup
                        popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                        popup.style.borderRadius = '15px';       // Bordes redondeados
                    },
                }).then(() => {
                    navigate("/forgotten");
                })
            }
        
    };

    return(
        <div className="form-container">
            <h2 className="intro_recover">¡Hola! {params.NombreUsuario}</h2>
            <h3 className="intro_recover"> Reestablece tu contraseña</h3>
            <form className="reg-form-form" onSubmit={handleSubmit}>
                <Pass text="Ingrese nueva contraseña:" onChange={handlePasswordChange} />
                {passError && <p className="error">{passError}</p>}
                <Pass text={"Confirmar contraseña:"} onChange={handlePasswordConfChange} />
                {passConfError && <p className="error">{passConfError}</p>}
                <button type="submit" className="btn-register-form"><Btn_Register text='Reestablecer contraseña' /></button>
            </form>
        </div>
    )
}