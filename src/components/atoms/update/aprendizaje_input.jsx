export default function Aprendizaje_input({ value, onChange }){
    return(
        <>
           <select 
                     
                    value={value} 
                    onChange={onChange}>
                    <option value="" disabled>Seleccione una opción</option>
                    <option value="1">Visual</option>
                    <option value="2">Auditivo</option>
                    <option value="3">Kinestesico</option>
            </select>   
        </>
    )
}