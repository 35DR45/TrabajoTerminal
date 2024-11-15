import { useState } from "react";
import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";


export default function Contenido_Curso(){
    const [Plaintext, setPlaintext] = useState('');
    const [Key, setKey] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const FormData = {
            Ptext: Plaintext, 
            key: Key
        }
        console.log(JSON.stringify(FormData));
        try{
            const response = await fetch('/api/Vigenere',{
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
            <h2>Cifrador Vigenere</h2>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <form className="form-container" onSubmit={handleSubmit}>
                    <label className="login-label"> Texto a cifrar: </label>
                        <input type="text" className="login-input" placeholder="Texto a cifrar por desplazamiento" onChange={(e) => setPlaintext(e.target.value)}/>
                    <label className="login-label"> Cantidad a desplazar: </label>
                        <input type="text" className="login-input" placeholder="Llave" onChange={(e) => setKey(e.target.value)}/>
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