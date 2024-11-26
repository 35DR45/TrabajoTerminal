import { useState,useContext } from 'react';
import Pass from "../../molecules/login/pass";
import '../CSS/register_form.css'
import Profile_Button from "../../atoms/perfil/profile_button"
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { UserContext } from "../../../UserContext";
export default function Updatepass_form(){
    const { user,iduser } = useContext(UserContext);
    const [password, setPassword] = useState('');
    const [newpassword, setnewPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [passError, setPassError] = useState('');
    const [newpassError, setnewPassError] = useState('');
    const [ConfirmError, setConfirmError] = useState('');
    const [envioError, setEnvioError] = useState('');
    const navigate = useNavigate();

    const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&()=/?¿¡'|°,;.\-\+]).{8,}$/;



    // Validar contraseña en cada cambio
    const handlePassChange = (e) => {
        const value = e.target.value;
        setPassword(value);
    };
    
    const handlePasswordChange = (field, value) => {
        if (field === 'newPassword') {
            setnewPassword(value);
        } else if (field === 'confirmPassword') {
            setConfirm(value);
        }
    
        // Validar nueva contraseña
        if (field === 'newPassword' && !regexPass.test(value)) {
            setnewPassError("Error: La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.");
        } else if(field=== 'confirmPassword'&& !regexPass.test(newpassword)) {
            setnewPassError("Error: La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.");
        }else{
            setnewPassError(''); // Limpia el mensaje de error si la nueva contraseña es válida
        }
    
        // Validar coincidencia de contraseñas
        if ((field === 'newPassword' && value !== confirm) || (field === 'confirmPassword' && value !== newpassword)) {
            setConfirmError("Error: Las contraseñas no coinciden");
        } else {
            setConfirmError(''); // Limpia el mensaje de error si coinciden
        }
    };
     // Validar contraseña en cada cambio
     const handlenewPasswordChange = (e) => {
        const value = e.target.value;
        setnewPassword(value);
        if (!regexPass.test(value)) {
            setnewPassError("Error: La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial.");
        } else if (confirm != value){
            setnewPassError("Error: Las contraseñas no coinciden");
        }else {
            setnewPassError(''); // Limpia el mensaje cuando cumple con los criterios
        }
    };

     // Validar contraseña en cada cambio
     const handleConfirmChange = (e) => {
        const value = e.target.value;
        setConfirm(value);
        
        if (newpassword != value) {
            console.log(newpassword)
            console.log(confirm)
            setConfirmError("Error: Las contraseñas no coinciden");
        } else {
            setConfirmError(''); // Limpia el mensaje cuando cumple con los criterios
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(passError === ''){
            const FormData = {
                iduser: iduser, 
                pass: password,
                newpass: newpassword,
            }
            try {
                // Envía los datos del formulario al backend
                const response = await fetch('/api/Updatepass', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(FormData)
                });
                if (response.ok) {
                 const data = await response.json();
                    if(data.status=="Pass actualiza"){
                    // Redirige al usuario a la URL /registrado
                    Swal.fire({
                        title:"Contraseña Actualizada",
                        text:"Actualización exitosa!",
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
                        navigate(-1);
                    })
                    }else if (data.status =="No coincide"){
                        Swal.fire({
                            title:"Error",
                            text:"La contraseña proporcionada no es la correcta",
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
                        
                        })
                    }else{
                        Swal.fire({
                            title:"Error",
                            text:"Ocurrio un error intentalo más tarde",
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
                        
                        }) 
                    }  
                } else {
                    Swal.fire({
                        title:"Error",
                        text:"No se pudo actualizar los datos",
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
                        navigate(-1);
                    })
                    console.error('Error al registrar usuario');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }else
            if(newpassError !== ''  || ConfirmError !== ''){
                setEnvioError('No puede enviar el formulario sin corregir los errores');
            }
        
    };

    return(
        <div className="form-container">
            <h4 className="profile_entry">Actualizar contraseña</h4>
            <form className="reg-form-form" onSubmit={handleSubmit}>
                <Pass onChange={handlePassChange} text={"Contraseña actual"}/>
                <Pass onChange={(e) => handlePasswordChange('newPassword', e.target.value)} text={"Nueva contraseña"}/>
                {newpassError && <p className="error">{newpassError}</p>} {/* Muestra el mensaje de error si hay */}
                <Pass onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)} text={"Confirmar contraseña"}/>
                {ConfirmError && <p className="error">{ConfirmError}</p>} {/* Muestra el mensaje de error si hay */}
                <button type="submit" className="btn-register-form"><Profile_Button text={"Actualizar"}/></button>
                {envioError && <p className="error">{envioError}</p>} {/* Muestra el mensaje de error si hay */}
            </form>
        </div>
    )
}
