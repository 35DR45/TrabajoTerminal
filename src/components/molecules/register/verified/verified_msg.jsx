import { Link } from "react-router-dom";
import Close_window from "../../../atoms/register/verified/close_window";
import Btn_Login from "../../../atoms/header/btn_Login";

export default function Verified_msg(){
    return(
        <div className="verified-user-msg">
            <Close_window/>
            <Link to={"/login"} className="btn-header"><Btn_Login/></Link>
        </div>
    )
}