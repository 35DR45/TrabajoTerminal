
export default function Profile_Input({placeText, typeProp, fetchVal,nonModificableVal }){
    return(
        <>
            <input type={typeProp} placeholder={placeText} defaultValue={fetchVal} value={nonModificableVal} />
        </>
    )
}