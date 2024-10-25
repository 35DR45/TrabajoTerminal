import Profile_Button from "../../atoms/perfil/profile_button";

export default function Profile_OPS_Buttons({text1, text2}){
    return(
        <div className="buttons_pair_col">
            <Profile_Button text={text1}/>
            <Profile_Button text={text2}/>
        </div>
    )
}