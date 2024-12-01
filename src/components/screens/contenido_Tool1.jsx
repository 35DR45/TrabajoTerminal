import { useState } from "react";
import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";
import Swal from 'sweetalert2'
import { useNavigate} from "react-router-dom";

export default function Contenido_Tool1(){
    const [Plaintext, setPlaintext] = useState('');
    const [dsiplacement, setdisplacement] = useState('');

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const FormData = {
            Ptext: Plaintext, 
            displ: dsiplacement
        }

        console.log(JSON.stringify(FormData));

        try{

            const response = await fetch('/api/Cesar',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                
                body: JSON.stringify(FormData)
            });
            const data=await response.json();
            console.log(data.result);
            alert("Texto cifrado: "+data.result);
            const container = document.getElementById('result');
            container.innerHTML = data.result;
        }catch(error){
            servErrorAlert(error)
            console.log('Error: ', error);
        }
    };
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
    return(
        <>
            <Header/>
            <h2 className="Courses_Section">Cifrador Cesar</h2>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <form className="form-container" onSubmit={handleSubmit}>
                    <label className="login-label"> Texto a cifrar: </label>
                    <input type="text" className="login-input" placeholder="Texto a cifrar por desplazamiento" onChange={(e) => setPlaintext(e.target.value)}/>
                    <label className="login-label"> Cantidad a desplazar: </label><input type="number" className="login-input" placeholder="Posiciones a desplazar" onChange={(e) => setdisplacement(e.target.value)}/>
                    <button type="submit" className="btn-register-form">EJECUTAR</button>
                </form>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center'}} className="Courses_Section" id="na">
                Resultado:
            </div>
            <div style={{ display: 'flex', justifyContent: 'center'}} className="Courses_Section" id="result">

            </div>
            <Footer/>
        </>
    )
}