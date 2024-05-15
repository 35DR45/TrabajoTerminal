import { Link } from "react-router-dom";
import Btn_Login from "../../atoms/header/btn_Login";
import Forgotten from "../../molecules/login/forgotten";
import Pass from "../../molecules/login/pass";
import UserName from "../../molecules/login/userName";
import '../CSS/login_form.css'
import { useState } from "react";

export default function Login_form(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {

    }

    return(
        <form className="form-container" onSubmit={handleSubmit}>
            <Btn_Login/>
            <UserName onChange={(e) => setUsername(e.target.value)}/>
            <Pass onChange={(e) => setPassword(e.target.value)}/>
            <Forgotten/>
            <Link to={"/Iniciado"} className="btn-login-form"><Btn_Login/></Link>
        </form>
    )
}