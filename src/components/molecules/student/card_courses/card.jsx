import DefaultCourseImage from "../../../../assets/DefaultCourseImage.png";
// import Logo_Container_Ipn from "../../../../assets/LogoIpnNegro.png";
import Course_Name from "../../../atoms/student/card_courses/course_Name";


export default function Card({courseName = "Default course name"}){
    return(
        <div className="Card_Course">
            <img src={DefaultCourseImage} alt="Imagen del curso por defecto"/>
            <Course_Name name={courseName}/>
        </div>
    )
}