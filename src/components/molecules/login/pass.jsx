import Pass_input from "../../atoms/login/pass_input";
import Pass_label from "../../atoms/login/pass_label";


export default function Pass({ value, onChange, text }){
    return(
        <div className="label-input-grouped">
            <Pass_label text={text}/>
            <Pass_input value={value} onChange={onChange}/>
        </div>
    )
}