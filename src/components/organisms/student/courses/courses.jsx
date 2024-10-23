import Card from "../../../molecules/student/card_courses/card";
import ToolsImage from "../../../../assets/ToolsImage.png"
import "../../CSS/courses.css"

export default function Courses(){
    return(
        <> 
            <div className="Course_Container">
                <Card courseName="Statistical tools for data mining"/>
                <Card courseName="Introduction to Cryptography"/>
            </div>
            <div className="Tools_container">
                <img src={ToolsImage} alt="Logo de herrramientas"/>
                <h3>Herramientas</h3>
            </div>
        </>
    )
}