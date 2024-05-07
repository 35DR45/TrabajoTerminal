import Grouped_btns from '../molecules/header/grouped_btns'
import './CSS/header.css'

export default function Header(){
    return(
        <div className="header-container">
            Header Logo
            <Grouped_btns/>
        </div>
    )
}