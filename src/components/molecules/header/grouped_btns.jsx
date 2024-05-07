import Btn_Login from "../../atoms/header/btn_Login";
import Btn_Register from "../../atoms/header/btn_Register";
import './CSS/grouped_Btns.css'

export default function Grouped_btns(){
    return(
        <div className="grouped-btns-container">
            <Btn_Register/>
            <Btn_Login/>
        </div>
    )
}