export default function Date_Rights(){
    const year = new Date()
    console.log(year.getFullYear());

    return(
        <div>
            <p>© {year.getFullYear()} TT-B169. Todos los derechos reservados</p>
        </div>
    )
}