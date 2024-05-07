import { useRef } from "react";

export default function UseRef(){
    const inputRef = useRef()

    const ChangeInputStyle = () =>
    {
        if(inputRef.current.value==="hello")
            inputRef.current.style.backgroundColor="green"
        else inputRef.current.style.backgroundColor="yellow" 
    }

    return(
        <>
        <h1>use ref</h1>
        <input ref={inputRef} onChange={()=>(ChangeInputStyle())}></input>
        </>
    )
}