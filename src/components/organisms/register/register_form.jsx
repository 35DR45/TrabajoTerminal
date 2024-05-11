import { useState } from 'react';
// import { useHistory } from "react-router-dom";
import Pass from "../../molecules/login/pass";
import UserName from "../../molecules/login/userName";
import '../CSS/register_form.css'
import Btn_Register from "../../atoms/header/btn_Register";
import Email from "../../molecules/register/email";
import { useNavigate } from 'react-router-dom';

export default function Register_form(){

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: ''
    });

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     console.log(e.targe.name);
    //     console.log(e.targe.value);
    //     // Validación de contraseña
    //     if (name === 'password') {
    //         if (value.length < 8) {
    //             console.log('La contraseña debe tener al menos 8 caracteres');
    //             return;
    //         }
    //         if (!/[A-Z]/.test(value)) {
    //             console.log('La contraseña debe contener al menos una mayúscula');
    //             return;
    //         }
    //         if (!/\d/.test(value)) {
    //             console.log('La contraseña debe contener al menos un número');
    //             return;
    //         }
    //         if (!/[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]/.test(value)) {
    //             console.log('La contraseña debe contener al menos un carácter especial');
    //             return;
    //         }
    //     }
        
    //     // Validación de nombre de usuario
    //     if (name === 'username') {
    //         if (!/[a-zA-Z]/.test(value)) {
    //             console.log('El nombre de usuario debe contener al menos una letra');
    //             return;
    //         }
    //         if (!/\d/.test(value)) {
    //             console.log('El nombre de usuario debe contener al menos un número');
    //             return;
    //         }
    //     }
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const FormData = {
            user: username, 
            pass: password,
            mail: email,
            phone: '12345'
        }
        console.log(FormData);
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
                navigate("/registrado");
            } else {
                console.error('Error al registrar usuario');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return(
        <div className="form-container">
            <Btn_Register/>
            <form className="reg-form-form" onSubmit={handleSubmit}>
                <UserName value={FormData.username} onChange={(e) => setUsername(e.target.value)}/>
                <Pass value={FormData.password} onChange={(e) => setPassword(e.target.value)}/>
                <Email value={FormData.email} onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" className="btn-register-form"><Btn_Register/></button>
            </form>
        </div>
    )
}
