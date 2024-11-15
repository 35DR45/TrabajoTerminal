import { useState } from "react";
import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";


export default function Contenido_Tool1(){
    const [Plaintext, setPlaintext] = useState('');
    const [dsiplacement, setdisplacement] = useState('');


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
            console.log('Error: ', error);
        }
    };
    return(
        <>
            <Header/>
            <h2 className="Courses_Section">Cifrador Cesar</h2>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <form className="form-container" onSubmit={handleSubmit}>
                    <label className="login-label"> Texto a cifrar: </label>
                    <input type="text" className="login-input" placeholder="Texto a cifrar por desplazamiento" onChange={(e) => setPlaintext(e.target.value)}/>
                    <label className="login-label"> Cantidad a desplazar: </label><input type="number" className="login-input" placeholder="Posciciones a desplazar" onChange={(e) => setdisplacement(e.target.value)}/>
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