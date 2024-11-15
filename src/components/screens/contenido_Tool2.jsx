import { useState } from "react";
import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";


export default function Contenido_Tool2(){
    const [Datos, setDatos] = useState('');
    const [Operacion, setOperacion] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const FormData = {
            op: Operacion+"("+Datos+")"
        }
        console.log(JSON.stringify(FormData));
        try{
            const response = await fetch('/api/Wolfram',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(FormData)
            });
            const data=await response.json();
            console.log(data.result);
            if(data.alttext==""){
                alert("No se ha obtenido resultado");
            }
            alert("Resultado: "+data.alttext);
            const container = document.getElementById('result');
            container.src = data.imagesrc;
            container.alt = data.alttext;
        }catch(error){
            console.log('Error: ', error);
        }
    };
    return(
        <>
            <Header/>
            <h2 className="Courses_Section">Calcoladora de tendencias centrales</h2>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <form className="form-container" onSubmit={handleSubmit}>
                    <label className="login-label"> Datos: </label>
                    <input type="text" className="login-input" placeholder="eg. 2,3,4,5" onChange={(e) => setDatos(e.target.value)}/>
                    <label className="login-label"> Operacion: </label>
                    <select className="login-input" placeholder="Opreación:" onChange={(e) => setOperacion(e.target.value)}>
                        <option value="median">Mediana</option>
                        <option value="mode">Moda</option>
                        <option value="average">Promedio</option>
                    </select>
                    <button type="submit" className="btn-register-form">EJECUTAR</button>
                </form>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center'}} className="Courses_Section" id="na">
                Resultado:
            </div>
            <div style={{ display: 'flex', justifyContent: 'center'}} className="Courses_Section" id="na">
                <img src="" alt="" id="result"/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', fontSize: '10 px', color: 'grey'}} id="na">
                Powered by wolfram alpha
            </div>
            <Footer/>
        </>
    )
}