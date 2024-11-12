import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";
import TTTeam from '../../assets/EquipoTT.jpeg'
import './CSS/landingPage.css'

export default function LandingPage(){
    return(
        <div className="lp-container">
            <Header/>
            <h1 className="lp-text">¿Para qué es el TT-B169?</h1>
            <p className="lp-text">
                Este proyecto busca crear una plataforma innovadora de apoyo educativo que facilite y potencie el aprendizaje en dos de las Unidades de Aprendizaje optativas más demandadas en la Escuela Superior de Cómputo (ESCOM): "Introducción a la criptografía" y "Herramientas estadísticas para el análisis de datos". Con la ayuda de Inteligencia Artificial, la aplicación web conectará a estudiantes con niveles de aprovechamiento complementarios, emparejando a aquellos que necesitan reforzar sus conocimientos con compañeros de desempeño avanzado.
            </p>
            <p className="lp-text">
                De esta manera, la aplicación se convierte en una herramienta estratégica para cubrir las brechas de conocimiento, fomentar el aprendizaje colaborativo y aprovechar al máximo los recursos de conocimiento compartido dentro de la comunidad estudiantil. Además, proporciona a los estudiantes un espacio de intercambio académico efectivo, promoviendo la construcción de una red de apoyo sólida entre pares. Con esta aplicación, los estudiantes de ESCOM podrán mejorar su comprensión en temas de alta especialización y fortalecer su desarrollo académico en áreas de creciente importancia profesional.
            </p>
            <h1 className="lp-text">Te presentamos al equipo detrás de este proyecto</h1>
            <div className="img-container"><img src={TTTeam} alt="Equipo de trabajo del TT 2024-B169" className="landing-img"/></div>
            <Footer/>
        </div>
    )
}