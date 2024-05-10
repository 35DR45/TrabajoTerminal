import Pass_input from "../../atoms/login/pass_input";
import Pass_label from "../../atoms/login/pass_label";

export default function Pass(){
    return(
        <div className="label-input-grouped">
            <Pass_label/>
            <Pass_input/>
        </div>
    )
}