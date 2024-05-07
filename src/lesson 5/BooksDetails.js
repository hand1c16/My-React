import { useDispatch, useSelector } from "react-redux"
import { addBook, getBooks, updateBook } from "../lesson 5/actions/BookAction";
import { useState } from "react";

export default function BooksDetails() {
    const books = useSelector((state) => state.Books)
    const dispatch = useDispatch()

    const [userId, setuserId] = useState("");
    const [name, setName] = useState("");

    const AddNewBook=()=>{
        const newBook = {name: name, id: userId}
        return newBook
    }

    const GetAllBooks = () =>{
        const allBooks= {name: "", id: userId}
        return allBooks
    }
    
    return(
        <>
            <h1>Books Redux</h1> 
            
            <input placeholder = "Enter a book name" onChange={(e)=> setName(e.target.value)}></input>
            <input placeholder = "Enter a clients id" onChange={(e)=> setuserId(e.target.value)}></input>

            <table className="table table-dark">

                {books? books.map((item, index)=>(
                    <>
                    <tr>
                        <td><h3>book name: {item.name}</h3></td>
                        <td><h3>book id: {item.id}</h3></td>
                    </tr>
                    </>
                )) : <div>Books are null</div>}
            </table>
            <button onClick={()=>dispatch(addBook(AddNewBook()))}>Add a book</button>
            <button onClick={(e)=>dispatch(updateBook(userId, 0))}>Update a user</button>
            <button onClick={()=>dispatch(getBooks(GetAllBooks()))}>get users books</button>
            
        </>
    )
}
