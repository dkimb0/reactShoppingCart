const calculateCartSubtotal = (cartArray) => {
    return cartArray.reduce((total, item) => {
        return total + item.quantity * item.price;
    }, 0).toFixed(2);
}

export default calculateCartSubtotal