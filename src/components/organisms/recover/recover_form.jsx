import { useState } from 'react';
import Pass from "../../molecules/login/pass";
import UserName from "../../molecules/login/userName";
import '../CSS/register_form.css'
import Btn_Register from "../../atoms/header/btn_Register";
import Email from "../../molecules/register/email";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export default function Recover_form() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passConfError, setPassConfError] = useState('');
    const [passError, setPassError] = useState('');


    const navigate = useNavigate();
    const regexUser = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&()=/?¿¡'|°,;.\-\+]).{8,}$/;
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    function validations() {
        if (regexUser.test(username)) {
            return regexPass.test(password);
        } else {
            return false
        }
    }

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

    // Validar email en cada cambio
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (!regexEmail.test(value)) {
            setEmailError("Error: Su email debe cumplir con el formato adecuado: ejemplo@algo.com");
        } else {
            setEmailError(''); // Limpia el mensaje cuando cumple con los criterios
        }
    };

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
        if (validations()) {
            if (passError === '' && emailError === '' && email !== '' && passConfError === '' && username !== '') {
                const FormData = {
                    user: username,
                    pass: password,
                    mail: email,
                }
                console.log(FormData);
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
                                title: "Gracias por registrarte",
                                text: "Registro exitoso!",
                                icon: 'success',
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
                                navigate("/login");
                            })
                        } else {
                            console.log(data.status);
                            Swal.fire({
                                title: "Error en el cambio de contraseña",
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
        }else {
            Swal.fire({
                title: "Tu nombre de usuario no cumple con las condiciones para haberse registrado",
                text: "¡Ingresa un nombre de usuario válido y reintentalo!",
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
    };

    return (
        <div className="form-container">
            <Btn_Register text='Reestablecer contraseña' />
            <form className="reg-form-form" onSubmit={handleSubmit}>
                <UserName onChange={(e) => setUsername(e.target.value)} />
                <Email onChange={handleEmailChange} />
                {emailError && <p className="error">{emailError}</p>}
                <Pass text="Ingrese nueva contraseña:" onChange={handlePasswordChange} />
                {passError && <p className="error">{passError}</p>}
                <Pass text={"Confirmar contraseña:"} onChange={handlePasswordConfChange} />
                {passConfError && <p className="error">{passConfError}</p>}
                <button type="submit" className="btn-register-form"><Btn_Register text='Cambiar contraseña' /></button>
            </form>
        </div>
    )
}