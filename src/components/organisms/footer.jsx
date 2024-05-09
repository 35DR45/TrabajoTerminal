import './CSS/footer.css'
import Au_logos from "./au_logos";
import Grouped_Links from "./grouped_Links";

export default function Footer(){
    return(
        <div className="footer-container">
            <Au_logos/>
            <Grouped_Links/>
        </div>
    )
}