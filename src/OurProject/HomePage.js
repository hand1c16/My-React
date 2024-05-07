import { useNavigate } from "react-router-dom";

export default function HomePage(){

    const navigate = useNavigate();
    const a = {"text-decoration": "none"}
    return (
        <>
        <p style={{"width":"700px","backgroundColor":"rgba(0, 0, 0, 0.5);","fontSize":"30px","color":"white"}}>Turner&Neumann is a watch brand founded in 1897, in a small, high-quality factory for the production of handmade watches located in the town of Kobrin, close to Warsaw.
Even then, the quality of T&N watches was widely known, after several years, when their name became famous, and the place was already tight, the factory moved to Kanada in the United States, and since then the reputation has been growing.</p>
        
        </>
    )
}