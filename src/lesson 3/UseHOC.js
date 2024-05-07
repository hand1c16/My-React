import HigherUserComponent from './HigherUserComponent'

function UseHOC(props)
{
    return(
        <>
        <table className="table table-striped">
            {props.resApi? props.resApi.map((item, index)=>(
                <>
                <tr>
                <td><h4>response login: {item.login}</h4></td>
                <td><h4>response id: {item.id}</h4></td>
                </tr>
                </>
            )):<div>user is null</div>}
        </table>
        </>
    )
}
export default HigherUserComponent(UseHOC)