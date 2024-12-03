import { Link } from "react-router-dom";
import DefaultCourseImage from "../../../assets/DefaultCourseImage.png";
import usuarioImg from '../../../assets/usuario.png'; // Ajusta la ruta según la ubicación del archivo
import cursosImg from '../../../assets/cursos.png'; // Ajusta la ruta según la ubicación del archivo

// import Logo_Container_Ipn from "../../../../assets/LogoIpnNegro.png";
import Course_Name from "../../atoms/student/card_courses/course_Name";


export default function Card_Admin({courseName = "Default course name",img, id}){
    console.log(img)
    if(img==="usuario"){
        img =usuarioImg
    }else{
        img =cursosImg
    }
    return(
        <Link className="Card_Course" to={`/adminad/${id}`}>
            <Course_Name name={courseName}/>
            
            <img src={img} alt="Imagen del curso por defecto"/>
        </Link>
    )
}