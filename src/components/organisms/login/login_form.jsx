import { useNavigate } from "react-router-dom";
import Btn_Login from "../../atoms/header/btn_Login";
import Forgotten from "../../molecules/login/forgotten";
import Pass from "../../molecules/login/pass";
import UserName from "../../molecules/login/userName";
import '../CSS/login_form.css'
import { useState, useContext, useEffect } from "react";
import { UserContext } from '../../../UserContext';
import Swal from 'sweetalert2'
export default function Login_form() {

    const { user, setUser, iduser, setidUser } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const FormData = {
            user: username,
            pass: password
        }
        try {
            const response = await fetch('api/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(FormData)
            });
            if (response.ok) {
                // Redirige al usuario a la URL /registrado
                const data = await response.json();

                if (data.status == "Inicio de Sesión Exitoso") {
                    Swal.fire({
                        title: "¡Bienvenido!",
                        text: "¡Inicio de sesión exitoso!",
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
                    }).then(async () => {
                        setUser(username)
                        setidUser(data.idUsuario)
                        try{
                            const response = await fetch('/api/validate-role');

                            if (!response.ok) {
                                throw new Error('No autorizado');
                            }

                            const data = await response.json(); // Ejemplo de respuesta: { role: 'admin', id: 'user123' }
                            if(data.role===0){
                                console.log(data.role)
                                navigate("/adminad")
                            }else{
                                navigate("/student");
                            }
                        }catch(error){
                            servErrorAlert(error)
                        }
                        
                        
                    })

                } else if (data.status == "Inicio de Sesión Fallido") {
                    Swal.fire({
                        title: "Error",
                        text: "Inicio de sesión fallido, datos incorrectos",
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
                }
            } else {
                Swal.fire({
                    title: "Error",
                    text: "Inicio de sesión fallido",
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
                console.error('Usuario no registrado');
            }
        } catch (error) {
            
            console.log('Error: ', error);
            servErrorAlert(error)
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

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <Btn_Login />
            <UserName onChange={(e) => setUsername(e.target.value)} />
            <Pass onChange={(e) => setPassword(e.target.value)} />
            <Forgotten />
            <button type="submit" className="btn-register-form"><Btn_Login /></button>
        </form>
    )
}