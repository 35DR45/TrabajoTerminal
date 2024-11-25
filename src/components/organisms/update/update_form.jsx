import { useState,useEffect,useContext } from 'react';
import Aprendizaje from "../../molecules/update/aprendizaje";
import UserName from "../../molecules/login/userName";
import '../CSS/register_form.css'
import Profile_Button from "../../atoms/perfil/profile_button"
import Email from "../../molecules/register/email";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { UserContext } from "../../../UserContext";
export default function Update_form(){

    const { user,iduser } = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [aprendizaje, setAprendizaje] = useState('');
    const [password, setPassword] = useState('');
    const [userError, setUserError] = useState('');
    const [passError, setPassError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [envioError, setEnvioError] = useState('');
    const navigate = useNavigate();
    const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&()=/?¿¡'|°,;.\-\+]).{8,}$/;
    const regexUser = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    useEffect(() => {
        // Función para cargar los datos
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/SeeUser/${iduser}`); // URL de tu API
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const data = await response.json();
                setUsername(data[0].NombreUsuario); // Actualizar las opciones con los datos obtenidos
                setEmail(data[0].Correo); // Actualizar las opciones con los datos obtenidos
                setAprendizaje(data[0].Aprendizaje)
            } catch (error) {
                console.error('Error al cargar datos:', error);
            }
        };

        fetchData(); // Llamar a la función al montar el componente
    }, [iduser]); //
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
    const handleAprendizajeChange = (e) => {
        const value = e.target.value;
        setAprendizaje(value);

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
        if(userError === ''  && emailError === ''){
            const updatedFormData = {
                iduser:iduser,
                user: username, 
                mail: email,
                aprendizaje:aprendizaje
            }
            try {
                // Envía los datos del formulario al backend
                const response = await fetch(`/api/UUpdateU/`, {
                    method: 'PUT', // Especifica el método PUT
                    headers: {
                        'Content-Type': 'application/json', // Indica que el cuerpo es JSON
                    },
                    body: JSON.stringify(updatedFormData), // Convierte el objeto a JSON
                });
        
                if (response.ok) {
                    const data = await response.json();
                    if(data.status=="Usuario modificado correctamente"){
                    // Redirige al usuario a la URL /registrado
                    Swal.fire({
                        title:"Usuario Actualizado",
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
                    }else{
                        Swal.fire({
                            title:"Error actualizando los datos",
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
                        })
                }   
                } else {
                    Swal.fire({
                        title:"Error actualizando los datos",
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
                        
                    })
                    console.error('Error al actualizar usuario');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }else
            if(userError !== '' || emailError !== ''){
                setEnvioError('No puede enviar el formulario sin corregir los errores');
            }
        
    };

    return(
        
        <div className="form-container">
           <h4 className="profile_entry">Actualizar datos</h4>
            <form className="reg-form-form" onSubmit={handleSubmit}>
                <UserName onChange={handleUsernameChange} value={username}/>
                {userError && <p className="error">{userError}</p>} 
                <Email onChange={handleEmailChange} value={email}/>
                {emailError && <p className="error">{emailError}</p>} {/* Muestra el mensaje de error si hay */}
                <Aprendizaje onChange={handleAprendizajeChange} value={aprendizaje}/>
                <button type="submit" className="btn-register-form"><Profile_Button text={"Actualizar"}/></button>
                {envioError && <p className="error">{envioError}</p>} {/* Muestra el mensaje de error si hay */}
            </form>
        </div>
    )
}
