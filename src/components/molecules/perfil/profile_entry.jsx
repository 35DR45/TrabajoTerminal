import Profile_Input from "../../atoms/perfil/profile_input";
import Profile_Label from "../../atoms/perfil/profile_label";


export default function Profile_Entry({type, placeText, labelText, fetchVal, value}){
    return(
        <div className="profile_entry">
            <Profile_Label text={labelText}/>
            <p>{fetchVal}</p>
        </div>
    )
}