import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";
import Recover_form from "../organisms/recover/recover_form";

export default function Recover_Pass(){
    return(
        <>
            <Header/>
            <div style={{ display: 'flex', justifyContent: 'center'}}><Recover_form/></div>
            <Footer/>
        </>
    )
}