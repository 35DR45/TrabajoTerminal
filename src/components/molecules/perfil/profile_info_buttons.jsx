import { Link } from "react-router-dom";
import Profile_Button from "../../atoms/perfil/profile_button";

export default function Profile_Info_Buttons({text1, text2,text3}){
    return(
        <div className="buttons_pair_row">
            <Link to={"/profile/progress"} ><button type="submit" className="btn_info_form"> <Profile_Button text={text1}/></button></Link>
            <Link to={"/tutor"} ><button type="submit" className="btn-info-form"> <Profile_Button text={text2}/></button></Link>
            <Link to={"/tutorado"} ><button type="submit" className="btn-info-form"> <Profile_Button text={text3}/></button></Link>
        </div>
    )
}