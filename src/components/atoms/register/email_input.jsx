export default function Email_input({ value, onChange }){
    return(
        <>
            <input type="text" 
                className="login-input" 
                placeholder="Ingrese su correo electrónico" 
                value={value} 
                onChange={onChange} />
        </>
    )
}