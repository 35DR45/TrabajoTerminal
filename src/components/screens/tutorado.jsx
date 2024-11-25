import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";
import TutoradoForm from "../organisms/tutor/tutoradoForm";

export default function Tutorado(){
    return(
        <>
            <Header/>
            <h2 className="Courses_Section">Usuario del que eres tutor</h2>
            <form className="profile_container">
                <TutoradoForm/>
                <h3 className="h3-title"></h3>
                
            </form>
            <Footer/>
        </>
    )
}