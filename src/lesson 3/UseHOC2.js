import HigherUserComponent from './HigherUserComponent'

function UseHOC2(props) {
    return(
        <>
        <ul>
        {props.resApi? props.resApi.map((Item, index)=>(
            <>
            <li><h4>response login: {Item.login}</h4></li>
            <li><h4>response id: {Item.id}</h4></li>
            </>
        )): <div>user response is null</div>}
        </ul>
        </>
    )
}
export default HigherUserComponent(UseHOC2)