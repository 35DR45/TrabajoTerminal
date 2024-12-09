import { Link } from "react-router-dom";
import Contact from "../../atoms/footer/contact";
import Privacy_advisory from "../../atoms/footer/privacy_advisory";
import Date_Rights from "./date_Rights";

export default function Grouped_Links(){
    return(
        <div className="links-container">
            <Contact/>
            <Date_Rights/>
            <Link to={"/privacidad"}><Privacy_advisory/></Link>
        </div>
    )
}