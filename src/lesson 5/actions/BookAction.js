export const addBook = (newBook) => {
    return {
            type: 'ADD_BOOK',
            payload: newBook
    }
}

export const updateBook = (id, index) =>{
    return {
            type: 'UPDATE_BOOK',
            id:id,
            index:index
            
    }
}

export const getBooks = (id) => {
    return{
            type: 'GET_BOOK_BY_ID',
            payload:id
    }
}