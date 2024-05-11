import Footer from "../organisms/footer/footer";
import Header from "../organisms/header/header";
import './CSS/landingPage.css'

export default function LandingPage(){
    return(
        <div className="lp-container">
            <Header/>
            <h1 className="lp-text lp-Title">¿Para qué es el TT-B169?</h1>
            <p className="lp-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia volutpat risus, eget commodo arcu porta ac. Proin a est gravida, fringilla nulla eget, tincidunt nisi. Duis scelerisque porttitor ex pharetra ultrices. Nulla accumsan semper rhoncus. Sed fringilla in sapien et malesuada. In leo augue, consectetur quis mi blandit, maximus fringilla dolor. Nulla diam purus, fermentum vel lectus vel, venenatis pretium nunc. Quisque cursus lorem purus, id sollicitudin nisl fermentum ac. Maecenas imperdiet tortor a nisl consequat tincidunt nec vitae metus. Nam id felis vestibulum, consectetur nisl a, sodales purus. Donec vehicula, nisi id rhoncus lobortis, ipsum est fermentum enim, sed facilisis orci nisi non lacus. Donec scelerisque, leo non consequat ultrices, justo neque tristique tortor, vitae posuere felis nisl eu dui. Nulla consectetur turpis sit amet justo lacinia egestas. Donec eleifend auctor nunc, nec auctor leo hendrerit a. Etiam tempus maximus velit sit amet fringilla. Cras tempus est quis odio vestibulum efficitur.
            </p>
            <Footer/>
        </div>
    )
}