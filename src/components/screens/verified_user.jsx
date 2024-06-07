import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";
import Verified_form from "../organisms/register/verified/verified_form";

export default function Verified_user(){
    return(
        <>
            <Header/>
            <div style={{ display: 'flex', justifyContent: 'center'}}><Verified_form/></div>
            <Footer/>
        </>
    )
}