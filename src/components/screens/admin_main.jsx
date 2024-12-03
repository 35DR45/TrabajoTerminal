import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";

import Card_Admin from "../molecules/admin/card_Admin";
import "./CSS/student.css"

const Admin = () => {

    return(
        <>
            <Header/>
            <h2 className="Courses_Section">
                Administación
            </h2>
            <div className="Course_Container">
            <Card_Admin  courseName={"Usuarios"} img={"usuario"} id={1}/>
            {/*<Card_Admin  courseName={"Cursos"} img={""} id={2}/>*/}
            </div>
          
            <Footer />
        </>
    )
}

export default Admin;