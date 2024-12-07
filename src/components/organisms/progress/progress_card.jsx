import { useContext } from "react";
import "../CSS/progress_card.css"
import { UserContext } from "../../../UserContext";
import { Gauge, gaugeClasses  } from '@mui/x-charts/Gauge';

export default function Progress_Card({teo , pra, tot}){
    const { user } = useContext(UserContext);
    const settings = {
        width: 100,
        height: 100,
    };
    

    return(
        <div className="Progress_Container">
            <div className="progress_section">
                <p className="progress_text" id="Teoria">Lecciones teóricas: </p>
                <Gauge { ...settings} value={Number(teo).toFixed(2)} startAngle={-90} endAngle={90} sx = {(theme) => ({
                    [`& .${gaugeClasses.valueText} text`]: {
                    fill: "#FFFF" // <-- change text color
                    },
                    [`& .${gaugeClasses.referenceArc}`]: {
                    fill: "#D6D6D6" // <-- change text color
                    },                    
                    [`& .${gaugeClasses.valueArc}`]: {
                    fill: "#024444" // <-- change text color
                    },
                })} />
            </div>
            <div className="progress_section">
                <p className="progress_text" id="Practica">Lecciones prácticas: </p>
                <Gauge { ...settings} value={Number(pra).toFixed(2)} startAngle={-90} endAngle={90} sx = {(theme) => ({
                    [`& .${gaugeClasses.valueText} text`]: {
                    fill: "#FFFF" // <-- change text color
                    },
                    [`& .${gaugeClasses.referenceArc}`]: {
                    fill: "#D6D6D6" // <-- change text color
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
                    fill: "#024444" // <-- change text color
                    },

                })} />
            </div>
            <div className="progress_section">
                <p className="progress_text" id="Total">Progreso total: </p>
                <Gauge { ...settings} value={Number(tot).toFixed(2)} sx = {(theme) => ({
                    [`& .${gaugeClasses.valueText} text`]: {
                    fill: "#FFFF" // <-- change text color
                    },                    
                    [`& .${gaugeClasses.referenceArc}`]: {
                    fill: "#D6D6D6" // <-- change text color
                    },                    
                    [`& .${gaugeClasses.valueArc}`]: {
                    fill: "#024444" // <-- change text color
                    },
                })} />
            </div>
        </div>
    )
}