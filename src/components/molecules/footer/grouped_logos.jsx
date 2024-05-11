import Logo_Container_Escom from "../../atoms/footer/logo_Container_Escom";
import Logo_Container_Ipn from "../../atoms/footer/logo_Container_Ipn";


export default function Grouped_logos(){
    return(
        <div className="logos-container">
            <Logo_Container_Ipn/>
            <Logo_Container_Escom/>
        </div>
    )
}