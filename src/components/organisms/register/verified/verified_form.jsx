import Congrats_msg from "../../../atoms/register/verified/congrats_msg";
import Verified_msg from "../../../molecules/register/verified/verified_msg";

export default function Verified_form({
    textHead = "¡Correo verificado!",
    textPar = "Puede cerrar esta ventana o directamente:"
    }){
    return(
        <div className="form-container">
            <Congrats_msg textHead = {textHead}/>
            <Verified_msg textPar = {textPar}/>
        </div>
    )
}