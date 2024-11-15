import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";


export default function Contenido_Tool1(){
    const handleSubmit = async (e) => {
        e.preventDefault();
        //const hashedPassword = await bcrypt.hash(password, 10); 
        const FormData = {
            text: text, 
            displ: dsipl
        }
        console.log(text)
        console.log(displ)
    };
    return(
        <>
            <Header/>
            <h2 className="Courses_Section">Cifrador Cesar</h2>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <form className="form-container" onSubmit={handleSubmit}>
                    <label className="login-label"> Texto a cifrar: </label>
                    <input type="text" className="login-input" placeholder="Texto a cifrar por desplazamiento"value={value} onChange={onChange}/>
                    <label className="login-label"> Cantidad a desplazar: </label><input type="number" className="login-input" placeholder="Posciciones a desplazar"value={value} onChange={onChange}/>
                    <button type="submit" className="btn-register-form"><Btn_Login/></button>
                </form>
            </div>
            <Footer/>
        </>
    )
}