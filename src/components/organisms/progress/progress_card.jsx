import "../CSS/progress_card.css"

export default function Progress_Card(){
    return(
        <div className="Progress_Container">
            <p className="progress_text">Lecciones teóricas: </p>
            <p className="progress_text">Lecciones prácticas: </p>
            <p className="progress_text">Progreso total: </p>
        </div>
    )
}