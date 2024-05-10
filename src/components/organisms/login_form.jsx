import { Link } from "react-router-dom";
import Btn_Login from "../atoms/header/btn_Login";
import Forgotten from "../molecules/login/forgotten";
import Pass from "../molecules/login/pass";
import UserName from "../molecules/login/userName";
import './CSS/login_form.css'

export default function Login_form(){
    return(
        <div className="form-container">
            <Btn_Login/>
            <UserName/>
            <Pass/>
            <Forgotten/>
            <Link to={"/Iniciado"} className="btn-login-form"><Btn_Login/></Link>
        </div>
    )
}