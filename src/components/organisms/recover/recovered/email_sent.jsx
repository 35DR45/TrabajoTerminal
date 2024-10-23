import Congrats_msg from "../../../atoms/register/verified/congrats_msg";
import Verified_msg from "../../../molecules/register/verified/verified_msg";

export default function Verified_form(){
    return(
        <div className="form-container">
            <Congrats_msg/>
            <Verified_msg/>
        </div>
    )
}