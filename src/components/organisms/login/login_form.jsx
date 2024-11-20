import { useNavigate } from "react-router-dom";
import Btn_Login from "../../atoms/header/btn_Login";
import Forgotten from "../../molecules/login/forgotten";
import Pass from "../../molecules/login/pass";
import UserName from "../../molecules/login/userName";
import '../CSS/login_form.css'
import { useState, useContext, useEffect } from "react";
import { UserContext } from '../../../UserContext';
import Swal from 'sweetalert2'
export default function Login_form(){

    const { user, setUser ,iduser, setidUser} = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const FormData = {
            user: username, 
            pass: password
        }
        try{
            const response = await fetch('api/Login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(FormData)
            });
            if (response.ok) {
                // Redirige al usuario a la URL /registrado
                const data = await response.json();
                
                //console.log(data.status)
                //console.log(data.idUsuario)
                if (data.status=="Inicio de Sesión Exitoso") {
                    Swal.fire({
                        title:"Bienvenido!",
                        text:"Inicio de sesión exitoso!",
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
                        setUser(username)
                        setidUser(data.idUsuario)
                        navigate("/student");
                    })
                    
                }else if (data.status=="Inicio de Sesión Fallido") {
                    Swal.fire({
                        title:"Error",
                        text:"Inicio de sesión fallido, datos incorrectos",
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
                    title:"Error",
                    text:"Inicio de sesión fallido",
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
                console.error('Usuario no registrado');
            }
        }catch(error){
            console.log('Error: ', error);
        }
    };



    return(
        <form className="form-container" onSubmit={handleSubmit}>
            <Btn_Login/>
            <UserName onChange={(e) => setUsername(e.target.value)}/>
            <Pass onChange={(e) => setPassword(e.target.value)}/>
            <Forgotten/>
            <button type="submit" className="btn-register-form"><Btn_Login/></button>
        </form>
    )
}