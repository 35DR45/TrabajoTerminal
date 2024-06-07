import { useNavigate } from "react-router-dom";
import bcrypt from 'bcryptjs';
import Btn_Login from "../../atoms/header/btn_Login";
import Forgotten from "../../molecules/login/forgotten";
import Pass from "../../molecules/login/pass";
import UserName from "../../molecules/login/userName";
import '../CSS/login_form.css'
import { useState } from "react";

export default function Login_form(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const hashedPassword = await bcrypt.hash(password, 10); 
        const FormData = {
            user: username, 
            pass: hashedPassword
        }
        try{
            const response = await fetch('api/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(FormData)
            });
            if (response.ok) {
                // Redirige al usuario a la URL /registrado
                navigate("/logeado");
            } else {
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