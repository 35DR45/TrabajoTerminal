import { useState } from 'react';
import bcrypt from 'bcryptjs';
import Pass from "../../molecules/login/pass";
import UserName from "../../molecules/login/userName";
import '../CSS/register_form.css'
import Btn_Register from "../../atoms/header/btn_Register";
import Email from "../../molecules/register/email";
import { useNavigate } from 'react-router-dom';

export default function Register_form(){


    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const regexUser = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

    function validations(){
        if(regexUser.test(username)){
            return regexPass.test(password);
        }else{
            return false
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(validations()){
            const hashedPassword = await bcrypt.hash(password, 10); 
            const hashedPassword1 = await bcrypt.hash(password, 10); 
            console.log("1: ", hashedPassword, "2: ", hashedPassword1);
            const FormData = {
                user: username, 
                pass: hashedPassword,
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
                    navigate("/login");
                } else {
                    console.error('Error al registrar usuario');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }else
            console.log("Alertas de validación van aquí");
        
    };

    return(
        <div className="form-container">
            <Btn_Register/>
            <form className="reg-form-form" onSubmit={handleSubmit}>
                <UserName onChange={(e) => setUsername(e.target.value)}/>
                <Pass onChange={(e) => setPassword(e.target.value)}/>
                <Email onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" className="btn-register-form"><Btn_Register/></button>
            </form>
        </div>
    )
}
