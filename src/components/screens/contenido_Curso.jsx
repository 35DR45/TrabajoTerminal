import Tema_Leccion from "../molecules/materia/tema_leccion";
import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";


export default function Contenido_Curso(){

    return(
        <>
            <Header/>
            <Tema_Leccion  />
            <Footer/>
        </>
    )
}