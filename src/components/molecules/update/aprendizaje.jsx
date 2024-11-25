import Aprendizaje_input from "../../atoms/update/aprendizaje_input";
import Aprendizaje_label from "../../atoms/update/aprendizaje_label";


export default function Email({ value, onChange }){
    return(
        <div className="label-input-grouped">
            <Aprendizaje_label/>
            <Aprendizaje_input value={value} onChange={onChange} />
        </div>
    )
}