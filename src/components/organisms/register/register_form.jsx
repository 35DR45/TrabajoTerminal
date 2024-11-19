import { useState } from 'react';
import Pass from "../../molecules/login/pass";
import UserName from "../../molecules/login/userName";
import '../CSS/register_form.css'
import Btn_Register from "../../atoms/header/btn_Register";
import Email from "../../molecules/register/email";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
export default function Register_form(){


    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userError, setUserError] = useState('');
    const [passError, setPassError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [envioError, setEnvioError] = useState('');

    const navigate = useNavigate();
    const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&()=/?¿¡'|°,;.-]).{8,}$/;
    const regexUser = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // Validar usuario en cada cambio
    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUsername(value);
        if (!regexUser.test(value)) {
            setUserError("Error: El nombre de usuario debe contener al menos 8 caracteres, una mayúscula, una minúscula y un número.");
        } else {
            setUserError(''); // Limpia el mensaje cuando cumple con los criterios
        }
    };

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(userError === '' && passError === ''){
            const FormData = {
                user: username, 
                pass: password,
                mail: email,
                phone: '12345'
            }
            try {
                // Envía los datos del formulario al backend
                const response = await fetch('/api/Register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(FormData)
                });
                if (response.ok) {
                    // Redirige al usuario a la URL /registrado
                    Swal.fire({
                        title:"Gracias por registrarte",
                        text:"Registro exitoso!",
                        icon:'success',
                        background:'#811642',
                        color:'#f2ffeb',
                        showCancelButton: false,    
                        timer: 2000,
                        timerProgressBar:true,
                        footer:'Recuerda no compartir tus datos de acceso',
                        didOpen: (popup) => {
                            Swal.showLoading();
                            // Aplicar estilos directamente al popup
                            popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                            popup.style.borderRadius = '15px';       // Bordes redondeados
                          },
                    }).then(()=> {
                        navigate("/login");
                    })
                    
                } else {
                    Swal.fire({
                        title:"Error en registrarte",
                        text:"Reintentalo!",
                        icon:'error',
                        background:'#811642',
                        color:'#f2ffeb',
                        showCancelButton: false,    
                        timer: 2000,
                        timerProgressBar:true,
                        footer:'Recuerda no compartir tus datos de acceso',
                        didOpen: (popup) => {
                            Swal.showLoading();
                            // Aplicar estilos directamente al popup
                            popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                            popup.style.borderRadius = '15px';       // Bordes redondeados
                          },
                    }).then(()=> {
                        navigate("/register");
                    })
                    console.error('Error al registrar usuario');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }else
            if(userError !== '' || passError !== '' || email === ''){
                setEnvioError('No puede enviar el formulario sin corregir los errores');
            }
        
    };

    return(
        <div className="form-container">
            <Btn_Register/>
            <form className="reg-form-form" onSubmit={handleSubmit}>
                <UserName onChange={handleUsernameChange}/>
                {userError && <p className="error">{userError}</p>} 
                <Pass onChange={handlePasswordChange}/>
                {passError && <p className="error">{passError}</p>} {/* Muestra el mensaje de error si hay */}
                <Email onChange={handleEmailChange}/>
                {emailError && <p className="error">{emailError}</p>} {/* Muestra el mensaje de error si hay */}
                <button type="submit" className="btn-register-form"><Btn_Register/></button>
                {envioError && <p className="error">{envioError}</p>} {/* Muestra el mensaje de error si hay */}
            </form>
        </div>
    )
}
