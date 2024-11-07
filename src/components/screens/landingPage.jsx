import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";
import './CSS/landingPage.css'

export default function LandingPage(){
    return(
        <div className="lp-container">
            <Header/>
            <h1 className="lp-text lp-Title">¿Para qué es el TT-B169?</h1>
            <p className="lp-text">
                Las unidades de aprendizaje (U.A.) optativas impartidas en la ESCOM, le permiten a sus estudiantes recibir una formación profesional íntegral; sin embargo, existe una alta demanda de algunas de estas, provocando que en el semestre 24A, se tuvieron que crear nuevos grupos para satisfacer dicha demanda, situación que se suma a la necesidad de una herramienta tecnológica que ayude a comprender o reforzar los conocimientos sobre los temas de estas U.A., por lo que se desarrollará un prototipo de aplicación web de emparejamiento de estudiantes para el apoyo en el aprendizaje de 2 U.A. optativas de ESCOM, enfocada en “Introduction to cryptography” y “Statistical tools for data analytics”, haciendo uso de Inteligencia Artificial. 
                
                La misión de la Escuela Superior de Cómputo es formar profesionales integrales en áreas como Sistemas Computacionales, Inteligencia Artificial y Ciencia de Datos. Dicha formación se fortalece a través de las Unidades de Aprendizaje (U. A.) optativas impartidas en esta unidad académica, las cuales representan para los estudiantes las herramientas con las que podrán enfocar sus conocimientos hacia las ramas de la tecnología que, en particular, sea de mayor relevancia o interés para ellos; siendo justamente esta la razón por la que consideramos que desempeñan un papel fundamental en el desarrollo académico y profesional de los estudiantes de esta institución. 

                Sin embargo, dado que los contenidos de dichas U.A.s son especializados, en ocasiones la cantidad de expertos en el área dentro de la escuela no logran satisfacer la demanda para atender a la matrícula interesada en las respectivas áreas; adicional a la escasez de expertos en dichas ramas, sabemos que los estudiantes tienen la necesidad de buscar apoyo extra para reforzar los temas que se tratan en clase, así como también aquella necesidad que surge de querer conocer los tópicos tratados en U.A. optativas distintas a las ya inscritas, misma que en ocasiones no puede cumplirse formalmente debido a que ya se han inscrito el máximo de las U.A. optativas permitido o que las U.A. de interés son competen a una línea de conocimiento distinta la completada en el primer nivel.  
            </p>
            <Footer/>
        </div>
    )
}