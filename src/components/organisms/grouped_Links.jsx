import Contact from "../atoms/footer/contact";
import Privacy_advisory from "../atoms/footer/privacy_advisory";
import Date_Rights from "./date_Rights";

export default function Grouped_Links(){
    return(
        <div className="links-container">
            <Contact/>
            <Date_Rights/>
            <Privacy_advisory/>
        </div>
    )
}