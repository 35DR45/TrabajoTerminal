import { Link } from "react-router-dom"
import ToolImage from "../../../assets/ToolsLogoEucalyp.png"
import Tool_Name from "../../atoms/toolsAt/tool_name"

export default function Tool_Card({toolName = "Default tool name", id}){
    return(
        <Link className="Card_Course" to={`/curso/${id}`}>
            <img src={ToolImage} alt="Imagen del curso por defecto"/>
        <Tool_Name name={toolName}/>
    </Link>
    )
}