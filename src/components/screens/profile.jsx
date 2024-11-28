import Profile_Info_Buttons from "../molecules/perfil/profile_info_buttons";
import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";
import Profile_Form from "../organisms/perfil/profile_form";
import "./CSS/profile.css"

export default function Profile(){
    return(
        <>
            <Header/>
            <h2 className="Courses_Section">Perfil</h2>
            <form className="profile_container">
                <Profile_Form/>
                <Profile_Info_Buttons text1={"Tu progreso"} text2={"Ver tutor"} text3={"Ver tutorado"}/>
            </form>
            <Footer/>
        </>
    )
}