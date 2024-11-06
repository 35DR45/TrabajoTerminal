import { Link } from "react-router-dom";
import DefaultCourseImage from "../../../../assets/DefaultCourseImage.png";
// import Logo_Container_Ipn from "../../../../assets/LogoIpnNegro.png";
import Course_Name from "../../../atoms/student/card_courses/course_Name";


export default function Card_Courses({courseName = "Default course name", id}){
    return(
        <Link className="Card_Course" to={`/curso/${id}`}>
            <img src={DefaultCourseImage} alt="Imagen del curso por defecto"/>
            <Course_Name name={courseName}/>
        </Link>
    )
}