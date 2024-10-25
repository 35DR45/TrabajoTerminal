import { Link } from "react-router-dom";
import Profile_Button from "../../atoms/perfil/profile_button";

export default function Profile_Info_Buttons({text1, text2}){
    return(
        <div className="buttons_pair_row">
            <Link to={"/profile/progress"} ><button type="submit" className="btn-info-form"> <Profile_Button text={text1}/></button></Link>
            <Link to={"/profile/progress"} ><button type="submit" className="btn-info-form"> <Profile_Button text={text2}/></button></Link>
        </div>
    )
}