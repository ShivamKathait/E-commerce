// For Add Item To Cart
export const addItem = (product) => {
    return{
            type : "ADDITEM",
            payload : product
    }
}


// For Delete Item From Cart
export const delItem = (product) => {
    return{
            type : "DELITEM",
            payload : product
    }
}