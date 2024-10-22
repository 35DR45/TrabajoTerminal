import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";
import Verified_form from "../organisms/register/verified/verified_form";

export default function Recovery_sent(){
    return(
        <>
            <Header/>
            <div style={{ display: 'flex', justifyContent: 'center'}}><Verified_form textHead="Hemos enviado un correo de recuperación " textPar="Una vez que verifique su correo puede cerrar esta ventana o directamente: "/></div>
            <Footer/>
        </>
    )
}