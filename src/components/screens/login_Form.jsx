import Footer from "../organisms/footer";
import Header from "../organisms/header";
import Login_form from "../organisms/login_form";
import './CSS/login_Form.css'

export default function Login_Form(){
    return(
        <>
            <Header/>
            <div style={{ display: 'flex', justifyContent: 'center'}}><Login_form/></div>
            <Footer/>
        </>
    )
}