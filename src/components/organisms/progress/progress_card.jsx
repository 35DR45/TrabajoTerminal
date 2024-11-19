import { useContext } from "react";
import { useEffect, useState } from "react";
import "../CSS/progress_card.css"
import { UserContext } from "../../../UserContext";

export default function Progress_Card({teo , pra, tot}){
    const { user } = useContext(UserContext);
    
    return(
        <div className="Progress_Container">
            <p className="progress_text" id="Teoria">Lecciones teóricas: {teo}%</p>
            <p className="progress_text" id="Practica">Lecciones prácticas: {pra}%</p>
            <p className="progress_text" id="Total">Progreso total: {tot}%</p>
        </div>
    )
}