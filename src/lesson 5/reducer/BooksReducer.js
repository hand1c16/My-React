const initialState = [{name: "Fadahel", id: 1}, {name: "Yozavad", id: 2}, {name: "Mahalallel", id: 3}]
const BooksReducer = (state = initialState, action) =>{

    switch(action.type){
        case 'ADD_BOOK':
            return [...state, action.payload]
        case 'UPDATE_BOOK':
            const newBooks = [...state]
            newBooks[action.index].id = action.id
            return newBooks
        case 'GET_BOOK_BY_ID':
            const newAllBooks = [...state]
            newAllBooks = state.filter(book => book.id === action.id);
            return newAllBooks
            //return state.filter(id => id=== action.id)
        default:
            return state
    }
}
export default BooksReducer