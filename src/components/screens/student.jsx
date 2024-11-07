import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";
import Courses from "../organisms/student/courses/courses";
import "./CSS/student.css"

const Student = () => {

    return(
        <>
            <Header/>
            <h2 className="Courses_Section">
                Cursos
            </h2>
            <Courses />
            <Footer />
        </>
    )
}

export default Student;