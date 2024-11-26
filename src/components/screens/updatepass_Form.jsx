import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";
import Updatepass_form from "../organisms/update/updatepass_form";
import './CSS/login_Form.css'

export default function updatepass_Form(){
    return(
        <>
            <Header/>
            <div style={{ display: 'flex', justifyContent: 'center'}}><Updatepass_form/></div>
            <Footer/>
        </>
    )
}