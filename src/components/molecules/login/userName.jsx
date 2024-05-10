import UserName_input from "../../atoms/login/userName_input";
import UserName_label from "../../atoms/login/userName_label";

export default function UserName(){
    return(
        <div className="label-input-grouped">
            <UserName_label/>
            <UserName_input/>
        </div>
    )
}