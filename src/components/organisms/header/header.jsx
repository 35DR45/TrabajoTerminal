import Grouped_btns from '../../molecules/header/grouped_btns'
import { Link } from "react-router-dom";
import '../CSS/header.css'

export default function Header(){
    return(
        <div className="header-container">
            <Link to={"/"}>Header Logo</Link>
            <Grouped_btns/>
        </div>
    )
}