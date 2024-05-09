import { Link } from "react-router-dom";
import Btn_Login from "../../atoms/header/btn_Login";
import Btn_Register from "../../atoms/header/btn_Register";
import './CSS/grouped_Btns.css'

export default function Grouped_btns(){
    return(
        <div className="grouped-btns-container">
            <Link to={"/register"} className="btn-header"><Btn_Register/></Link>
            <Link to={"/login"} className="btn-header"><Btn_Login/></Link>
        </div>
    )
}