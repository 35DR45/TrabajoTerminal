import { Link } from "react-router-dom";
import ForgottenPass_intro from "../../atoms/login/forgottenPass_intro";
import ForgottenPass_link from "../../atoms/login/forgottenPass_link";

export default function Forgotten(){
    return(
        <div className="forgotten-pass">
            <ForgottenPass_intro/>
            <Link to={"/forgotten"}><ForgottenPass_link/></Link>
        </div>
    )
}