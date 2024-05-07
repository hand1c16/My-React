export const decreaseQty = (productId) => {
    return{
        type : "DECREASE_QTY",
        payload:productId
    }
}

export const addQty = (productId) => {
    return{
        type: "ADD_QTY",
        productId
    }
}