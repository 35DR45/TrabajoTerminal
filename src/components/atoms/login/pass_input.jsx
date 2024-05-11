export default function Pass_input({ value, onChange }){
    return(
        <>
            <input type="password" 
                className="login-input" 
                placeholder="Ingrese su contraseña"  
                value={value} 
                onChange={onChange} />
        </>
    )
}