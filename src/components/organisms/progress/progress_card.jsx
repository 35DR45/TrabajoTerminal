import { useContext } from "react";
import "../CSS/progress_card.css"
import { UserContext } from "../../../UserContext";
import { Gauge } from '@mui/x-charts/Gauge';

export default function Progress_Card({teo , pra, tot}){
    const { user } = useContext(UserContext);
    
    return(
        <div className="Progress_Container">
            <div className="progress_section">
                <p className="progress_text" id="Teoria">Lecciones teóricas: </p>
                <Gauge width={100} height={100} value={teo} startAngle={-90} endAngle={90} />
            </div>
            <div className="progress_section">
                <p className="progress_text" id="Practica">Lecciones prácticas: </p>
                <Gauge width={100} height={100} value={pra} startAngle={-90} endAngle={90} />
            </div>
            <div className="progress_section">
                <p className="progress_text" id="Total">Progreso total: </p>
                <Gauge width={100} height={100} value={tot}/>
            </div>
        </div>
    )
}