
const cartState = [];
const productsAmount = 0
const CartReducer = (state = cartState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            if(action.product.qty!== 0){
            action.product.cartqty = action.product.cartqty + 1}
            else alert("The product is out of stock.");
            state.map(product => {
                if (product.id === action.productId) {
                    product.cartqty = action.product.cartqty
                }
            })
            if (action.product.cartqty == 1) {
                return [...state, action.product];
            }
            return [...state]

        case "REMOVE_FROM_CART":
            action.product.cartqty = action.product.cartqty - 1;
            return state.filter((item) => item.id !== action.product.id)

        case "DECREASE_FROM_CART":
            debugger
            const newProducts=[...state]
            newProducts.find((item) => item.id === action.productId).cartqty -= 1;
            return newProducts;

        default:
            return state;
    }
}
export default CartReducer;