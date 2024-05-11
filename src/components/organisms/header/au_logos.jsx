import Texto_Footer from "../../atoms/footer/texto_Footer";
import Grouped_logos from "../../molecules/footer/grouped_logos";
import '../CSS/footer.css'

export default function Au_logos(){
    return(
        <div className="AU-logos">
            <Grouped_logos/>
            <Texto_Footer/>
        </div>
    )
}