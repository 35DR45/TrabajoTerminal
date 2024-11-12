import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";
import TutorForm from "../organisms/tutor/tutorForm";
import like from '../../assets/iconLike.svg'
import disLike from '../../assets/iconDisLike.svg'

export default function Tutor(){
    return(
        <>
            <Header/>
            <h2 className="Courses_Section">Tu tutor</h2>
            <form className="profile_container">
                <TutorForm/>
                <h3 className="h3-title">¿Recomiendas a este tutor?</h3>
                <div className="buttons_pair_row">
                    <img src={like} width="60px"/>
                    <img src={disLike} width="60px"/>
                </div>
            </form>
            <Footer/>
        </>
    )
}