import { useEffect, useState } from "react"

const UpdateComponent=(OriginalComponent)=>{
    function NewComponent() {
        const [apiRes, setApiRes] = useState()
        const url="https://api.github.com/users"
        const GetApiData = async () => {
            try{
                const response = await fetch(url)
                const responseJson = await response.json()
                setApiRes(responseJson)
            }
            catch(error){
                console.log(error)
            }
        }


        useEffect(() => {
            GetApiData()
        })
        return <OriginalComponent resApi={apiRes}></OriginalComponent>
    }
    return NewComponent
}
export default UpdateComponent