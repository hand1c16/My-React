import React, { useState } from "react"

export default function Home(props)
{
    const numOfChildren = React.Children.count(props.children)
    const childrenArray = React.Children.toArray(props.children)
    
    const [index, setIndex] = useState(0)
    const singleChild = React.cloneElement(childrenArray[index])

    const nextImage = () =>{
        if(index < numOfChildren){
            const nextIndex = index + 1
            setIndex(nextIndex)
        }
    }

    const previousImage = () =>{
        if(index > 0){
            const nextIndex = index - 1
            setIndex(nextIndex)
        }
    }

    return (
        <>
            <h1>My Pictures</h1>
            <div>{singleChild}</div>
            <pre><button disabled={index == 0} onClick={() => previousImage()}>&lt;previous</button> <button disabled={index == numOfChildren-1} onClick={() => nextImage()}>next&gt;</button></pre>
        </>
    )
}