import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";
import Update_form from "../organisms/update/update_form";
import './CSS/login_Form.css'

export default function update_Form(){
    return(
        <>
            <Header/>
            <div style={{ display: 'flex', justifyContent: 'center'}}><Update_form/></div>
            <Footer/>
        </>
    )
}