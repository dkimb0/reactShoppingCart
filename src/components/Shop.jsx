import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ProductCard from "./ProductCard";
import styles from "../styling/Shop.module.css"




const Shop =() => {
    const [productList, setProductList] = useState([]);

    const [cartArray, setCartArray] = useState(
        () => {
        const localValue = localStorage.getItem("cartArray");
        if(localValue === null) return [];
        return JSON.parse(localValue);
    })

    const [loading, setLoading] = useState(true);
    const [cartOpen, setCartOpen] = useState(false);

    let qty = cartArray.map(item => {
        return item.quantity;
    }).reduce((total, current) => {
        return total + current
    }, 0)
    
    useEffect(() => {
        localStorage.setItem('cartArray', JSON.stringify(cartArray))
    }, [cartArray]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>{
                    setProductList(json);
                })
                .catch(err => {console.error(err)})
                .finally(() => setLoading(false));
    },[]);

    const handleAddToCart = (id, price, quantity, title, image) => {
        setCartArray(currentArray => {
            const numericQuantity = Number(quantity);
            const itemIndex = currentArray.findIndex(item => item.id === id)
            if (itemIndex === -1) return [...currentArray, {id: id, title: title, price: price, quantity: numericQuantity, image: image}]
            
            const newQuantity = currentArray[itemIndex].quantity + numericQuantity;

            currentArray[itemIndex] = {id: id, title: title, price: price, quantity: newQuantity, image: image};
            const newArray = [...currentArray]
            return newArray;
        })
    }

    const handleToggleCart = () => {
        setCartOpen(!cartOpen);
    }

    const handleDeleteCart =(id) => {
        setCartArray(currentArray => {
            const newArray = currentArray.filter(item => item.id !== id);
            console.log(currentArray);
            console.log(newArray);
            return newArray;
        })
    }


    return (
        <>
            <Navbar handleToggleCart={handleToggleCart} qty={qty} hasCart ={true}/>
            {cartOpen && (
                        <div className={styles.cartContainer} >
                            {(cartArray.length === 0 ? (
                                <p>Cart is empty!</p>):(
                                 <>
                                    <table className={styles.cartTable}>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartArray.map(item => (
                                                <tr key={crypto.randomUUID()}>
                                                    <td>
                                                        <img className={styles.cartThumbnail}
                                                        src={item.image} alt="thumbnail" />
                                                    </td>
                                                    <td>{item.title}</td>
                                                    <td>${item.price}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>
                                                        <button onClick={() => handleDeleteCart(item.id)}>X</button>
                                                    </td>
                                                </tr>
                                            )
                                            )}
                                        </tbody>
                                    </table>

                                    <p>Subtotal: ${cartArray.reduce((accumulator, item) => {
                                        return accumulator + item.quantity * item.price;
                                    }, 0).toFixed(2)}</p>

                                    <button className={styles.checkoutButton}>Go to Checkout!</button>
                                 </>
                                )
                            )}
                        </div>
                    )
            }
            <h1>Shop</h1>
            {loading ? (
                <p>Loading...</p>
            ):(
                <div className={styles.productCardContainer}>
                    {productList.map((product) => (
                        <ProductCard
                            key={crypto.randomUUID()}
                            productInfo = {product}
                            handleAddToCart = {handleAddToCart}
                        ></ProductCard>
                    ))}
                </div>
            )
            }
        </>
    )
}

export default Shop