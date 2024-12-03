import { Link, useParams , useNavigate} from "react-router-dom";
// import Leccion from "../../atoms/materia/leccion";
import "../../organisms/CSS/materia.css"
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
export default function Tema_Leccion(){

    const params = useParams();

    const [temario, setTemario] = useState([]);
    const navigate = useNavigate();
    console.log(params);
    

    useEffect(() => {
        // Función para obtener los datos de la API
        const fetchTemario = async () => {
        try {
            const response = await fetch(`/api/SeeLC/${params.cursoID}`); 
            const data = await response.json();
            setTemario(data); 
        } catch (error) {
            console.error("Error fetching the temario:", error);
            servErrorAlert(error)
        }
        };

        fetchTemario();
    }, [params.cursoID]); // El array vacío [] asegura que solo se ejecute una vez cuando el componente se monta
    
    console.log(temario);
    const servErrorAlert = async (error)=>{
        Swal.fire({
            title: 'Ocurrió un error en el servidor, regresando al inicio.',
            text: `${error}`,
            icon: 'error',
            background: '#811642',
            color: '#f2ffeb',
            timer:3000,
            allowOutsideClick: false, // Evita que se cierre al hacer clic fuera
            timerProgressBar: true,
            didOpen: (popup) => {
                Swal.showLoading();
                popup.style.border = '5px solid #f2ffeb'; // Color y grosor del borde
                popup.style.borderRadius = '15px';  // Mostrar indicador de carga
            },
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                navigate('/')
            }
        })
    }

    // Estructuramos el temario en un árbol de capítulos, temas y secciones
    const estructurarTemario = (temario) => {
        const tree = [];

        temario.forEach((elemento) => {
            const { idLeccion, Titulo } = elemento;

            // Identificamos capítulos
            if (idLeccion % 1000 === 0) {
                tree.push({ ...elemento, temas: [] });
            }
            // Identificamos temas dentro del capítulo
            else if (idLeccion % 100 === 0) {
                const chapter = tree.find((ch) => Math.floor(ch.idLeccion / 1000) === Math.floor(idLeccion / 1000));
                if (chapter) {
                    chapter.temas.push({ ...elemento, secciones: [] });
                }
            }
            // Identificamos secciones dentro del tema
            else if (idLeccion % 10 === 0) {
                const chapter = tree.find((ch) => Math.floor(ch.idLeccion / 1000) === Math.floor(idLeccion / 1000));
                const tema = chapter?.temas.find((tm) => Math.floor(tm.idLeccion / 100) === Math.floor(idLeccion / 100));
                if (tema) {
                    tema.secciones.push({ ...elemento, subsecciones: [] });
                }
            }
            // Identificamos subsecciones dentro de la sección
            else {
                const chapter = tree.find((ch) => Math.floor(ch.idLeccion / 1000) === Math.floor(idLeccion / 1000));
                const tema = chapter?.temas.find((tm) => Math.floor(tm.idLeccion / 100) === Math.floor(idLeccion / 100));
                const seccion = tema?.secciones.find((sec) => Math.floor(sec.idLeccion / 10) === Math.floor(idLeccion / 10));
                if (seccion) {
                    seccion.subsecciones.push(elemento);
                }
            }
        });

        return tree;
    };

    

    const RenderTemario = ({ tree }) => (
        <ul>
            {tree.map((capitulo) => (
                <li key={capitulo.idLeccion}>
                <Link className="textoTemario" to={`/leccion/${capitulo.idLeccion}/${params.cursoID}/${0}`}>
                    <h2>{capitulo.Titulo}</h2>
                </Link>
                    <hr/>
                    {capitulo.temas.length > 0 && (
                        <ul>
                            {capitulo.temas.map((tema) => (
                                <li key={tema.idLeccion}>
                                <Link className="textoTemario" to={`/leccion/${tema.idLeccion}/${params.cursoID}/${0}`}>
                                    <h3>{tema.Titulo}</h3>
                                </Link>
                                    {tema.secciones.length > 0 && (
                                        <ul>
                                            {tema.secciones.map((seccion) => (
                                                <li key={seccion.idLeccion}>
                                                    <Link className="textoTemario" to={`/leccion/${seccion.idLeccion}/${params.cursoID}/${0}`}>
                                                        <p>{seccion.Titulo}</p>
                                                    </Link>
                                                    {seccion.subsecciones.length > 0 && (
                                                        <ul>
                                                            {seccion.subsecciones.map((subseccion) => (
                                                                <li key={subseccion.idLeccion}>
                                                                    <Link  className="textoTemario" to={`/ejercicio/${subseccion.idLeccion}/${params.cursoID}/${1}`}>
                                                                        <span>{subseccion.Titulo}</span>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
);
    
    const temarioEstructurado = estructurarTemario(temario);

    console.log(temarioEstructurado);


    return(
        <div className="listado_materias">
            <RenderTemario tree={temarioEstructurado} />
        </div>
    )
}