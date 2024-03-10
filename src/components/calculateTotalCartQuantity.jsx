const calculateTotalCartQuantity = (cartArray) => {
    return cartArray.map(item => {
        return item.quantity;
    }).reduce((total, current) => {
        return total + current;
    }, 0)
}

export default calculateTotalCartQuantity