
export default function Profile_Input({placeText, typeProp, fetchVal}){
    return(
        <>
            <input type={typeProp} placeholder={placeText} defaultValue={fetchVal} />
        </>
    )
}