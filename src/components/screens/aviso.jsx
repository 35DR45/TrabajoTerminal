import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";
import "./CSS/aviso.css"

export default function Aviso() {
    return (
        <>
            <Header/>
            <div className="privacidad_contenedor">
                <h1>Aviso de privacidad integral de TT 2024-B169</h1>
                <p>Ángel Andrés Arteaga Hernández es el responsable del tratamiento de los datos personales que usted nos proporcione</p>
                <p>Los datos personales que usted nos proporcione serán utilizados con las siguientes finalidades</p>
                <p>Emparejamiento y contacto con los tutores</p>
                <p>Le informamos que sus datos personales son compartidos con:</p>
                <table>
                    <thead>
                        <tr>
                            <th>Destinatario de los datos personales</th>
                            <th>Finalidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tutor o tutorado asignado por el sistema de emparejamiento</td>
                            <td>Que los usuarios puedan ponerse en contacto para reforzar sus conocimientos en las materias</td>
                        </tr>
                    </tbody>
                </table>
                <p>En caso que no desee que sus datos personales sean transferidos a los destinatarios antes señalados, usted podrá manifestarlo mediante el envió de un correo electrónico a: </p>
                <a href="mailto:soporteTT2024-B169@gmail.com">soporteTT2024-B169@gmail.com</a>
                <p>Cualquier cambio al aviso de privacidad será notificado a través del mismo portal.</p>

            </div>
            <Footer/>
        </>
    )
}