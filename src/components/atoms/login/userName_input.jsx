export default function UserName_input({ value, onChange }){
    return(
        <>
            <input type="text" 
                className="login-input" 
                placeholder="Ingrese su nombre de usuario" 
                value={value} 
                onChange={onChange}/>
        </>
    )
}