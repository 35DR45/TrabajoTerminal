import Email_input from "../../atoms/register/email_input";
import Email_label from "../../atoms/register/email_label";

export default function Email({ value, onChange }){
    return(
        <div className="label-input-grouped">
            <Email_label/>
            <Email_input value={value} onChange={onChange} />
        </div>
    )
}