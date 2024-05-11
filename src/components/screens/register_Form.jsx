import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";
import Register_form from "../organisms/register/register_form";
import './CSS/login_Form.css'

export default function Login_Form(){
    return(
        <>
            <Header/>
            <div style={{ display: 'flex', justifyContent: 'center'}}><Register_form/></div>
            <Footer/>
        </>
    )
}